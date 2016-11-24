import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Input,
  Segment
} from 'semantic-ui-react'
import localStorageIsAvailable from '../store/utils/localStorageIsAvailable'
import MultiPlayerToggle from './MultiPlayerToggle'

class EnterPlayground extends Component {
  constructor () {
    super()

    let nickname = ''
    let isMultiPlayer = false

    if (localStorageIsAvailable()) {
      isMultiPlayer = (localStorage.getItem('tris3d.isMultiPlayer') === 'true')
      nickname = localStorage.getItem('tris3d.nickname') || nickname
    }

    this.state = {
      isMultiPlayer,
      nickname
    }
  }

  render () {
    const {
      enableMultiPlayer,
      disableMultiPlayer,
      setNickname
    } = this.props

    const {
      isMultiPlayer,
      nickname
    } = this.state

    const setState = this.setState.bind(this)

    return (
      <Container>
        <Grid divided stackable columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Header
                  as='h1'
                  content='Tris 3d'
                  image={<Image shape='circular' src='/tris3d.png' />}
                  subheader='Play tic tac toe in 3d'
                  textAlign='center'
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Input fluid
                  label='Your nick'
                  onChange={(e, { value }) => {
                    setState({ nickname: value.trim() })
                  }}
                  value={nickname}
                />
                <Button fluid primary
                  content='Play'
                  disabled={(nickname.length < 2)}
                  onClick={() => {
                    if (isMultiPlayer) enableMultiPlayer()
                    else disableMultiPlayer()

                    setNickname(nickname)
                  }}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div>
          <MultiPlayerToggle
            isMultiPlayer={isMultiPlayer}
            toggleMultiPlayer={() => {
              setState({
                isMultiPlayer: !isMultiPlayer
              })
            }}
          />
        </div>
      </Container>
    )
  }
}

export default EnterPlayground
