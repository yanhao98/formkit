import { FormKitTypeDefinition } from '@formkit/core'
import { textInput } from '../sections'
import { $root } from '../compose'

const definition: FormKitTypeDefinition = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  // prettier-ignore
  schema: $root(textInput()),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [],
}

export default definition
