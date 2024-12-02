export interface FormValuesInterface {
  name: string
  link: string
}

export interface FormInterface {
  handleCancel: () => void
  defaultData: FormValuesInterface
  handleValues: (values: FormValuesInterface) => void
  isEditabled: boolean
}
