import { FormControl, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import { ListItem } from './component/ListItem';
import { DropDownTemplateType } from './types';

export const DropDown: DropDownTemplateType = ({
  dropDownItems,
  placeholder,
  setParentValue,
  defaultValue,
  error,
  idx,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (val: unknown) => {
    setValue(val);
    setParentValue(val, idx);
  };

  const renderDropDownItem = map(dropDownItems, (dropDownItem, index) => (
    <ListItem key={index} value={dropDownItem.value}>
      {dropDownItem.label}
    </ListItem>
  ));

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={value || ''}
          onChange={(e) => handleChange(e.target?.value)}
          displayEmpty
          renderValue={value ? undefined : () => <span style={{ color: 'gray' }}>{placeholder}</span>}
          size={'medium'}
          error={error?.error}
          defaultValue=""
        >
          {renderDropDownItem}
        </Select>
      </FormControl>
    </Box>
  );
};
