import { createI18n } from 'vue-i18n'
import { App } from 'vue'

import en from '../../i18n/en.json'
import fr from '../../i18n/fr.json'


export default function install<T>(app: App<T>) {
    const i18n = createI18n({
      locale: 'fr',
      messages: { en, fr }
    })
    app.use(i18n)
}
