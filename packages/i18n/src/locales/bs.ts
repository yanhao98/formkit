import type { FormKitValidationMessages, FormKitValidationMessage } from '@formkit/validation';
import { createMessageName } from '@formkit/validation';

/**
 * Here we can import additional helper functions to assist in formatting our
 * language. Feel free to add additional helper methods to libs/formats if it
 * assists in creating good validation messages for your locale.
 */
import { sentence as s, list, date, order } from '../formatters';
import type { FormKitLocaleMessages } from '../i18n';
/**
 * Shown on a button for adding additional items.
 */
export const add = 'Dodaj';
/**
 * Shown when a button to remove items is visible.
 */
export const remove = 'Ukloni';
/**
 * Shown when there are multiple items to remove at the same time.
 */
export const removeAll = 'Ukloni sve';
/**
 * Shown when all fields are not filled out correctly.
 */
export const incomplete = 'Nažalost, nisu sva polja ispravno popunjena.';
/**
 * Shown in a button inside a form to submit the form.
 */
export const submit = 'Pošalji';
/**
 * Shown when no files are selected.
 */
export const noFiles = 'Nije odabran nijedan fajl';
/**
 * Shown on buttons that move fields up in a list.
 */
export const moveUp = 'Pomjeri gore';
/**
 * Shown on buttons that move fields down in a list.
 */
export const moveDown = 'Pomjeri dole';
/**
 * Shown when something is actively loading.
 */
export const isLoading = 'Učitavanje...';
/**
 * Shown when there is more to load.
 */
export const loadMore = 'Učitaj više';
/**
 * Show on buttons that navigate state forward
 */
export const next = 'Sljedeći';
/**
 * Show on buttons that navigate state backward
 */
export const prev = 'Prethodni';
/**
 * Shown when adding all values.
 */
export const addAllValues = 'Dodajte sve vrijednosti';
/**
 * Shown when adding selected values.
 */
export const addSelectedValues = 'Dodajte odabrane vrijednosti';
/**
 * Shown when removing all values.
 */
export const removeAllValues = 'Uklonite sve vrijednosti';
/**
 * Shown when removing selected values.
 */
export const removeSelectedValues = 'Uklonite odabrane vrijednosti';
/**
 * Shown when there is a date to choose.
 */
export const chooseDate = 'Odaberite datum';
/**
 * Shown when there is a date to change.
 */
export const changeDate = 'Promjenite datum';
/**
 * Shown when there is something to close
 */
export const close = 'Zatvori';
/**
 * Shown when there is something to open.
 */
export const open = 'Otvoreno';
/**
 * The value is not an accepted value.
 * @see {@link https://formkit.com/essentials/validation#accepted}
 */
export const accepted: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value is not a valid 'accepted' value."> */
  return `Molimo prihvatite ${name}.`;
  /* </i18n> */
};
/**
 * The date is not after
 * @see {@link https://formkit.com/essentials/validation#date-after}
 */
export const date_after: FormKitValidationMessage = function ({
  name,
  args
}) {
  if (Array.isArray(args) && args.length) {
    /* <i18n case="Shown when the user-provided date is not after the date supplied to the rule."> */
    return `${s(name)} mora biti poslije ${date(args[0])}.`;
    /* </i18n> */
  }
  /* <i18n case="Shown when the user-provided date is not after today's date, since no date was supplied to the rule."> */
  return `${s(name)} mora biti u budućnosti.`;
  /* </i18n> */
};
/**
 * The value is not a letter.
 * @see {@link https://formkit.com/essentials/validation#alpha}
 */
export const alpha: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains non-alphabetical characters."> */
  return `${s(name)} može sadržavati samo abecedne karaktere.`;
  /* </i18n> */
};
/**
 * The value is not alphanumeric
 * @see {@link https://formkit.com/essentials/validation#alphanumeric}
 */
export const alphanumeric: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains non-alphanumeric characters."> */
  return `${s(name)} može sadržavati samo slova i brojeve.`;
  /* </i18n> */
};
/**
 * The value is not letter and/or spaces
 * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
 */
export const alpha_spaces: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains non-alphabetical and non-space characters."> */
  return `${s(name)} može sadržavati samo slova i razmake.`;
  /* </i18n> */
};
/**
 * The value have no letter.
 * @see {@link https://formkit.com/essentials/validation#contains_alpha}
 */
export const contains_alpha: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains only non-alphabetical characters."> */
  return `${s(name)} mora sadržavati abecedne karaktere.`;
  /* </i18n> */
};
/**
 * The value have no alphanumeric
 * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
 */
export const contains_alphanumeric: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains only non-alphanumeric characters."> */
  return `${s(name)} mora sadržavati slova ili brojeve.`;
  /* </i18n> */
};
/**
 * The value have no letter and/or spaces
 * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
 */
export const contains_alpha_spaces: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains only non-alphabetical and non-space characters."> */
  return `${s(name)} mora sadržavati slova ili razmake.`;
  /* </i18n> */
};
/**
 * The value have no symbol
 * @see {@link https://formkit.com/essentials/validation#contains_symbol}
 */
export const contains_symbol: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains only alphanumeric and space characters."> */
  return `${s(name)} mora sadržavati simbol.`;
  /* </i18n> */
};
/**
 * The value have no uppercase
 * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
 */
export const contains_uppercase: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains only non-alphabetical-uppercase characters."> */
  return `${s(name)} mora sadržavati veliko slovo.`;
  /* </i18n> */
};
/**
 * The value have no lowercase
 * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
 */
export const contains_lowercase: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains only non-alphabetical-lowercase characters."> */
  return `${s(name)} mora sadržavati malo slovo.`;
  /* </i18n> */
};
/**
 *  The value have no numeric
 * @see {@link https://formkit.com/essentials/validation#contains_numeric}
 */
export const contains_numeric: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value have no numeric."> */
  return `${s(name)} mora sadržavati brojeve.`;
  /* </i18n> */
};
/**
 * The value is not symbol
 * @see {@link https://formkit.com/essentials/validation#symbol}
 */
export const symbol: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains alphanumeric and space characters."> */
  return `${s(name)} mora biti simbol.`;
  /* </i18n> */
};
/**
 * The value is not uppercase
 * @see {@link https://formkit.com/essentials/validation#uppercase}
 */
export const uppercase: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains non-alphabetical-uppercase characters."> */
  return `${s(name)} može sadržavati samo velika slova.`;
  /* </i18n> */
};
/**
 * The value is not lowercase
 * @see {@link https://formkit.com/essentials/validation#lowercase}
 */
export const lowercase: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value contains non-alphabetical-lowercase characters."> */
  return `${s(name)} može sadržavati samo mala slova.`;
  /* </i18n> */
};
/**
 * The date is not before
 * @see {@link https://formkit.com/essentials/validation#date-before}
 */
export const date_before: FormKitValidationMessage = function ({
  name,
  args
}) {
  if (Array.isArray(args) && args.length) {
    /* <i18n case="Shown when the user-provided date is not before the date supplied to the rule."> */
    return `${s(name)} mora biti prije ${date(args[0])}.`;
    /* </i18n> */
  }
  /* <i18n case="Shown when the user-provided date is not before today's date, since no date was supplied to the rule."> */
  return `${s(name)} mora biti u prošlosti.`;
  /* </i18n> */
};
/**
 * The value is not between two numbers
 * @see {@link https://formkit.com/essentials/validation#between}
 */
export const between: FormKitValidationMessage = function ({
  name,
  args
}) {
  if (isNaN(args[0]) || isNaN(args[1])) {
    /* <i18n case="Shown when any of the arguments supplied to the rule were not a number."> */
    return `Ovo polje je pogrešno konfigurirano i ne može se poslati.`;
    /* </i18n> */
  }
  const [a, b] = order(args[0], args[1]);
  /* <i18n case="Shown when the user-provided value is not between two numbers."> */
  return `${s(name)} mora biti između ${a} i ${b}.`;
  /* </i18n> */
};
/**
 * The confirmation field does not match
 * @see {@link https://formkit.com/essentials/validation#confirm}
 */
export const confirm: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value does not equal the value of the matched input."> */
  return `${s(name)} ne podudara se.`;
  /* </i18n> */
};
/**
 * The value is not a valid date
 * @see {@link https://formkit.com/essentials/validation#date-format}
 */
export const date_format: FormKitValidationMessage = function ({
  name,
  args
}) {
  if (Array.isArray(args) && args.length) {
    /* <i18n case="Shown when the user-provided date does not satisfy the date format supplied to the rule."> */
    return `${s(name)} nije ispravan datum, molimo koristite format ${args[0]}`;
    /* </i18n> */
  }
  /* <i18n case="Shown when no date argument was supplied to the rule."> */
  return 'Ovo polje je pogrešno konfigurirano i ne može se poslati';
  /* </i18n> */
};
/**
 * Is not within expected date range
 * @see {@link https://formkit.com/essentials/validation#date-between}
 */
export const date_between: FormKitValidationMessage = function ({
  name,
  args
}) {
  /* <i18n case="Shown when the user-provided date is not between the start and end dates supplied to the rule. "> */
  return `${s(name)} mora biti između ${date(args[0])} i ${date(args[1])}`;
  /* </i18n> */
};
/**
 * Shown when the user-provided value is not a valid email address.
 * @see {@link https://formkit.com/essentials/validation#email}
 */
export const email = 'Molimo Vas da unesete validnu email adresu.';
/**
 * Does not end with the specified value
 * @see {@link https://formkit.com/essentials/validation#ends-with}
 */
export const ends_with: FormKitValidationMessage = function ({
  name,
  args
}) {
  /* <i18n case="Shown when the user-provided value does not end with the substring supplied to the rule."> */
  return `${s(name)} ne završava sa ${list(args)}.`;
  /* </i18n> */
};
/**
 * Is not an allowed value
 * @see {@link https://formkit.com/essentials/validation#is}
 */
export const is: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value is not one of the values supplied to the rule."> */
  return `${s(name)} nije dozvoljena vrijednost.`;
  /* </i18n> */
};
/**
 * Does not match specified length
 * @see {@link https://formkit.com/essentials/validation#length}
 */
export const length: FormKitValidationMessage = function ({
  name,
  args: [first = 0, second = Infinity]
}) {
  const min = Number(first) <= Number(second) ? first : second;
  const max = Number(second) >= Number(first) ? second : first;
  if (min == 1 && max === Infinity) {
    /* <i18n case="Shown when the length of the user-provided value is not at least one character."> */
    return `${s(name)} mora biti najmanje jedan karakter.`;
    /* </i18n> */
  }
  if (min == 0 && max) {
    /* <i18n case="Shown when first argument supplied to the rule is 0, and the user-provided value is longer than the max (the 2nd argument) supplied to the rule."> */
    return `${s(name)} mora biti manje od ili jednako ${max} karaktera.`;
    /* </i18n> */
  }
  if (min === max) {
    /* <i18n case="Shown when first and second argument supplied to the rule are the same, and the user-provided value is not any of the arguments supplied to the rule."> */
    return `${s(name)} treba imati ${max} karaktera.`;
    /* </i18n> */
  }
  if (min && max === Infinity) {
    /* <i18n case="Shown when the length of the user-provided value is less than the minimum supplied to the rule and there is no maximum supplied to the rule."> */
    return `${s(name)} mora biti veći od ili jednak ${min} karaktera.`;
    /* </i18n> */
  }
  /* <i18n case="Shown when the length of the user-provided value is between the two lengths supplied to the rule."> */
  return `${s(name)} mora biti između ${min} i ${max} karaktera.`;
  /* </i18n> */
};
/**
 * Value is not a match
 * @see {@link https://formkit.com/essentials/validation#matches}
 */
export const matches: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value does not match any of the values or RegExp patterns supplied to the rule. "> */
  return `${s(name)} nije dozvoljena vrijednost.`;
  /* </i18n> */
};
/**
 * Exceeds maximum allowed value
 * @see {@link https://formkit.com/essentials/validation#max}
 */
export const max: FormKitValidationMessage = function ({
  name,
  node: {
    value
  },
  args
}) {
  if (Array.isArray(value)) {
    /* <i18n case="Shown when the length of the array of user-provided values is longer than the max supplied to the rule."> */
    return `Ne može imati više od ${args[0]} ${name}.`;
    /* </i18n> */
  }
  /* <i18n case="Shown when the user-provided value is greater than the maximum number supplied to the rule."> */
  return `${s(name)} mora biti manji ili jednak ${args[0]}.`;
  /* </i18n> */
};
/**
 * The (field-level) value does not match specified mime type
 * @see {@link https://formkit.com/essentials/validation#mime}
 */
export const mime: FormKitValidationMessage = function ({
  name,
  args
}) {
  if (!args[0]) {
    /* <i18n case="Shown when no file formats were supplied to the rule."> */
    return 'Nisu dozvoljeni formati datoteka.';
    /* </i18n> */
  }
  /* <i18n case="Shown when the mime type of user-provided file does not match any mime types supplied to the rule."> */
  return `${s(name)} mora biti tipa: ${args[0]}`;
  /* </i18n> */
};
/**
 * Does not fulfill minimum allowed value
 * @see {@link https://formkit.com/essentials/validation#min}
 */
export const min: FormKitValidationMessage = function ({
  name,
  node: {
    value
  },
  args
}) {
  if (Array.isArray(value)) {
    /* <i18n case="Shown when the length of the array of user-provided values is shorter than the min supplied to the rule."> */
    return `Ne može imati manje od ${args[0]} ${name}.`;
    /* </i18n> */
  }
  /* <i18n case="Shown when the user-provided value is less than the minimum number supplied to the rule."> */
  return `Mora biti barem ${args[0]} ${name} .`;
  /* </i18n> */
};
/**
 * Is not an allowed value
 * @see {@link https://formkit.com/essentials/validation#not}
 */
export const not: FormKitValidationMessage = function ({
  name,
  node: {
    value
  }
}) {
  /* <i18n case="Shown when the user-provided value matches one of the values supplied to (and thus disallowed by) the rule."> */
  return `“${value}” nije dozvoljeno ${name}.`;
  /* </i18n> */
};
/**
 *  Is not a number
 * @see {@link https://formkit.com/essentials/validation#number}
 */
export const number: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when the user-provided value is not a number."> */
  return `${s(name)} mora biti broj.`;
  /* </i18n> */
};
/**
 * Require one field.
 * @see {@link https://formkit.com/essentials/validation#require-one}
 */
export const require_one: FormKitValidationMessage = function ({
  name,
  node,
  args: inputNames
}) {
  const labels = inputNames.map(name => {
    const dependentNode = node.at(name);
    if (dependentNode) {
      return createMessageName(dependentNode);
    }
    return false;
  }).filter(name => !!name);
  labels.unshift(name);
  /* <i18n case="Shown when the user-provided has not provided a value for at least one of the required fields."> */
  return `${labels.join(' ili ')} je obavezno.`;
  /* </i18n> */
};
/**
 * Required field.
 * @see {@link https://formkit.com/essentials/validation#required}
 */
export const required: FormKitValidationMessage = function ({
  name
}) {
  /* <i18n case="Shown when a user does not provide a value to a required input."> */
  return `${s(name)} je obavezno.`;
  /* </i18n> */
};
/**
 * Does not start with specified value
 * @see {@link https://formkit.com/essentials/validation#starts-with}
 */
export const starts_with: FormKitValidationMessage = function ({
  name,
  args
}) {
  /* <i18n case="Shown when the user-provided value does not start with the substring supplied to the rule."> */
  return `${s(name)} ne počinje sa ${list(args)}.`;
  /* </i18n> */
};
/**
 * Is not a url
 * @see {@link https://formkit.com/essentials/validation#url}
 */
export const url: FormKitValidationMessage = function () {
  /* <i18n case="Shown when the user-provided value is not a valid url."> */
  return `Unesite važeći link.`;
  /* </i18n> */
};
/**
 * Shown when the date is invalid.
 */
export const invalidDate = 'Odabrani datum je nevažeći.';
/**
 * Standard language for interface features.
 * @public
 */
const ui: FormKitLocaleMessages = {
  add,
  remove,
  removeAll,
  incomplete,
  submit,
  noFiles,
  moveUp,
  moveDown,
  isLoading,
  loadMore,
  next,
  prev,
  addAllValues,
  addSelectedValues,
  removeAllValues,
  removeSelectedValues,
  chooseDate,
  changeDate,
  close,
  open
};

/**
 * These are all the possible strings that pertain to validation messages.
 * @public
 */
const validation: FormKitValidationMessages = {
  accepted,
  date_after,
  alpha,
  alphanumeric,
  alpha_spaces,
  contains_alpha,
  contains_alphanumeric,
  contains_alpha_spaces,
  contains_symbol,
  contains_uppercase,
  contains_lowercase,
  contains_numeric,
  symbol,
  uppercase,
  lowercase,
  date_before,
  between,
  confirm,
  date_format,
  date_between,
  email,
  ends_with,
  is,
  length,
  matches,
  max,
  mime,
  min,
  not,
  number,
  require_one,
  required,
  starts_with,
  url,
  invalidDate
};
export default {
  ui,
  validation
};