export interface FormValuesInterface {
  name: string
  link: string
}

export interface FormInterface {
  handleCreateNode: (values: FormValuesInterface) => void
  handleCancel: () => void
}
