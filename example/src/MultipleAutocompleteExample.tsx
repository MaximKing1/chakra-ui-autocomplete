import React, { FC } from 'react'
import { Avatar, Flex, Heading, Text } from '@chakra-ui/react'
import { CUIMultipleAutocomplete } from '../../dist'
import { countries } from './constants'
import { Item } from './App'

export const MultipleAutocompleteExample: FC = () => {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const customRender = <T extends Item>(selected: T) => {
    return (
      <Flex flexDir="row" alignItems="center">
        <Avatar mr={2} size="sm" name={selected.label} />
        <Text>{selected.label}</Text>
      </Flex>
    )
  }

  return (
    <Flex minW="25rem" w="25rem" flexDirection="column">
      <Heading mb={8} as="h1" size="lg" color="blue.600">MultipleAutocomplete.tsx</Heading>

      <Heading mb={3} as="h2" size="md">Basic Multiple Example with Style Props</Heading>

      <CUIMultipleAutocomplete
        tagStyleProps={{
          rounded: 'full'
        }}
        label="Choose preferred work locations"
        placeholder="Type a Country"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />


      <Flex mt={6} />
      <Heading mb={3} as="h2" size="md">Basic Multiple Example with Custom Renderer</Heading>
      <CUIMultipleAutocomplete
        tagStyleProps={{
          rounded: 'full'
        }}
        label="Choose preferred work locations"
        placeholder="Type a Country"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        itemRenderer={customRender}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </Flex>
  )
}
