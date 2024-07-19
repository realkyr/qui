import { RadioButton, RadioButtonGroup } from '../../components'

const ShowcaseRadioButton = () => {
  return (
    <>
      <h2 className='text-xl font-bold mt-8 mb-6'>Radio Button</h2>
      <RadioButton key='1' label='Radio Button' />

      <h2 className='text-xl font-bold mt-8 mb-6'>Radio Group</h2>
      <RadioButtonGroup
        name={'radio'}
        options={[
          {
            label: 'Option 1',
            value: '1'
          },
          {
            label: 'Option 2',
            value: '2'
          },
          {
            label: 'Option 3',
            value: '3'
          }
        ]}
      />
    </>
  )
}

export default ShowcaseRadioButton
