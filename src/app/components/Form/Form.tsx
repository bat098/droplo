import React from "react"
import Card from "../Card/Card"
import FormGroup from "../FormGroup/FoprmGroup"
import TextField from "../TextField/TextField"
import { Controller, useForm } from "react-hook-form"
import Label from "../Label/Label"
import Button from "../Button/Button"
import { FormInterface, FormValuesInterface } from "./Form.types"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Image from "next/image"
import IconButton from "../IconButton/IconButton"

const Form = (props: FormInterface) => {
  const { handleCreateNode, handleCancel } = props
  // validation schema
  const resolver = yup.object({
    name: yup.string().required("Pole wymagane"),
    link: yup.string().required("Pole wymagane"),
  })

  //   react-hook-form
  const { control, handleSubmit } = useForm<FormValuesInterface>({
    defaultValues: {
      name: "",
      link: "",
    },
    resolver: yupResolver(resolver),
  })

  //  handlers

  const onSubmit = (values: FormValuesInterface) => {
    handleCreateNode(values)
  }

  const handleDelete = () => {
    console.log("delete")
  }

  //   #################################################
  //   #################################################
  //   #################################################

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <div className="flex gap-x-4">
          <div className="grow">
            <FormGroup>
              <Label>Nazwa</Label>
              <Controller
                control={control}
                name="name"
                render={({ field: { name, onChange, value } }) => (
                  <TextField
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder="np. Promocje"
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <Label>Link</Label>
              <Controller
                control={control}
                name="link"
                render={({ field: { name, onChange, value } }) => (
                  <TextField
                    icon={
                      <Image
                        src={`/icons/magnifier.svg`}
                        alt="magnifier"
                        width={20}
                        height={20}
                      />
                    }
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder="Wklej lub wyszukaj"
                  />
                )}
              />
            </FormGroup>
            <div className="flex gap-x-2 mt-5">
              <Button
                onClick={handleCancel}
                variant="outlined"
                color="darkGray"
              >
                Anuluj
              </Button>
              <Button color="purple" variant="outlined" type="submit">
                Dodaj
              </Button>
            </div>
          </div>
          <IconButton onClick={handleDelete}>
            <Image
              src={`/icons/trash.svg`}
              width={20}
              height={20}
              alt="trash"
            />
          </IconButton>
        </div>
      </Card>
    </form>
  )
}

export default Form
