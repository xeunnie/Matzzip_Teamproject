import { styled } from '@mui/material/styles';
import React from 'react';

export const Container = styled('div')({
  width: '100%',
  height: '100%',
  // position: 'fixed',
  // top: 0,
  // left: 0,
  // margin: '0 auto'
});

export const MapWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
  height: '800px',
  margin: '0 auto'
})

export const MapCategory = styled('ul')({
  position: 'absolute',
  top: '10px',
  left: '10px',
  display: 'inline-block',
  border: '1px solid #d3d3d3',
  borderRadius: '6px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  zIndex: 1
})

export const CategoryBtn = styled('button')({
})