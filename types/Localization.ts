import { createIntl, createIntlCache, IntlShape } from '@formatjs/intl';

declare global {
  interface Window {
    UniversalIntl: {
      createIntlCache: typeof createIntlCache;
      createIntl: typeof createIntl;
      locale: string;
    };
  }
}

export class LocaleHelper {
  intl: IntlShape<string>;

  constructor(messages: { [key: string]: any }) {
    if (!window.UniversalIntl) {
      throw Error(`Please build visual sdk using create-incorta-visual`);
    }
    const locale = window.UniversalIntl.locale;
    const cache = window.UniversalIntl.createIntlCache();
    this.intl = window.UniversalIntl.createIntl(
      {
        locale,
        messages: flattenMessages(messages[locale])
      },
      cache
    );
  }

  formatMessage(key: string) {
    return this.intl.formatMessage({ id: key });
  }

  getLocale(): string {
    return window.UniversalIntl.locale;
  }
}

function flattenMessages(nestedMessages: any, prefix = '') {
  return Object.keys(nestedMessages).reduce<any>((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {} as any);
}
