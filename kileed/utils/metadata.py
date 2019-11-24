# Copyright © 2019 STJV <contact@stjv.fr>
#
# This work is free. You can redistribute it and/or modify it under the terms of
# the Do What The Fuck You Want To Public License, Version 2, as published by
# Sam Hocevar.
#
# See the COPYING file for more details.
from collections import OrderedDict

from django.core.exceptions import PermissionDenied
from django.http import Http404
from django.utils.encoding import force_text

from rest_framework import exceptions, serializers
from rest_framework.metadata import BaseMetadata
from rest_framework.request import clone_request
from rest_framework.utils.field_mapping import ClassLookupDict

class VueFormMetadata(BaseMetadata):
    def determine_metadata(self, request, view):
        metadata = OrderedDict()
        metadata['name'] = view.get_view_name()
        if hasattr(view, 'get_serializer'):
            actions = self._get_actions(request, view)
            if actions:
                metadata['actions'] = actions
        return metadata

    def _get_actions(self, request, view):
        actions = {}
        for method in set(view.allowed_methods):
            if method.lower() == 'options':
                continue
            serializer = view.get_serializer()
            actions[method] = self._fields_metadata(serializer)

        return actions

    def _fields_metadata(self, serializer):
        if hasattr(serializer, 'child'):
            serializer = serializer.child
        return OrderedDict([
            (field_name, self._field_metadata(field))
            for field_name, field in serializer.fields.items()
            if not isinstance(field, serializers.HiddenField)
        ])

    def _field_metadata(self, field):
        field_info = OrderedDict()

        field_info = {
            'type': type(field).__name__,
            'vuejs_props': getattr(field, 'vuejs_props', {}),
            'from_query': getattr(field, 'from_query'),
            'readonly': getattr(field, 'read_only', False),
            'label': getattr(field, 'label', None),
            'initial': getattr(field, 'initial', None)
        }

        return field_info
