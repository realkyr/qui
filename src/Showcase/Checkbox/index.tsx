import { Checkbox, CheckboxGroup } from '../../components'

const ShowcaseCheckbox = () => {
  return (
    <>
      <h2 className='text-xl font-bold mt-8 mb-6'>Checkbox</h2>
      <Checkbox key='1' label='Checkbox' />

      <h2 className='text-xl font-bold mt-8 mb-6'>Checkbox Group</h2>
      <CheckboxGroup
        name={'checkbox'}
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

export default ShowcaseCheckbox
