import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import {avatar} from 'mui/material/avatar'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'SPYDOCS' })}>
      <Typography>{intl.formatMessage({ id: 'SPYDOCS' })}</Typography>
    </Page>
  )
}
export default HomePage
