// Form information is being sent to Netlify's forms service

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useSearchParams } from 'react-router-dom'
import * as yup from 'yup'

import TextInput from '../components/validatedInputs/TextInput'

import { errorToast, successToast } from '../components/contact/statusToasts'

import { CheckIcon } from '@chakra-ui/icons'
import layeredWavesUp from '../assets/layered-waves-up.svg'

const ContactPage = (): JSX.Element => {
  const encode = (data: FormValues) => {
    return Object.keys(data)
      .map(
        (key: keyof FormValues) =>
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(data[key].toString())
      )
      .join('&')
  }

  const DataScheme = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Must be at least 2 characters')
      .max(50, 'Must be 50 characters as maximum')
      .required('Your name is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Your email is required'),
  })

  interface FormValues {
    [k: string]: string
    name: string
    email: string
    message: string
  }

  const toast = useToast()

  const [search] = useSearchParams()
  const defaultCheckboxesValue: string | null = search.get('servicio')

  const initialFormValues: FormValues = {
    name: '',
    email: '',
    message: '',
  }

  const handleSubmit = async (
    data: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ): Promise<void> => {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        subject: 'Cotización de servicios informáticos',
        ...data,
      }),
    })

    setSubmitting(false)

    toast.closeAll()
    if (response.ok) {
      resetForm()
      toast(successToast)
    } else {
      toast(errorToast)
    }
  }

  return (
    <VStack>
      <Image
        src={layeredWavesUp}
        alt="Waves illustration"
        height={20}
        width="100%"
        objectFit="cover"
        objectPosition="bottom"
      />
      <Heading>Contact</Heading>
      <Box width="90%" maxWidth="500px">
        <Formik
          validationSchema={DataScheme}
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleChange,
            values,
          }) => {
            return (
              <Form name="contact" data-netlify="true">
                <VStack spacing={7}>
                  <Field name="name">
                    {() => (
                      <TextInput
                        name="name"
                        value={values.name}
                        label="Name"
                        isTouched={touched.name}
                        isRequired
                        autoFocus
                        errorDescription={errors.name}
                        placeholder="Alfredo González"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>
                  <Field name="email">
                    {() => (
                      <TextInput
                        name="email"
                        value={values.email}
                        type="email"
                        label="Email"
                        isTouched={touched.email}
                        isRequired
                        errorDescription={errors.email}
                        placeholder="alfredo@correo.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    )}
                  </Field>
                  <Field name="message" type="textarea">
                    {() => (
                      <FormControl>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea
                          id="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="I need the project to be..."
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    size="lg"
                    leftIcon={<CheckIcon />}
                  >
                    Send
                  </Button>
                </VStack>
              </Form>
            )
          }}
        </Formik>
      </Box>
    </VStack>
  )
}

export default ContactPage
