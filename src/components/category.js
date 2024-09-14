import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CategoryBtn() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">未完成</Button>
        <Button variant="outlined">已完成</Button>
        <Button variant="outlined">全部</Button>
      </Stack>
    </>
  );
}