import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { userInfo } from 'os'
import { picks } from '../reducers/picks'
import UserRow from '../components/userRow'

const ResultsTable = props => (
  <div>
    <Paper>
      <table border="2">
        <body>
          <header>
            <h1>Player Picks</h1>
          </header>
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Week 1</th>
              <th scope="col">Week 2</th>
              <th scope="col">Week 3</th>
              <th scope="col">Week 4</th>
              <th scope="col">Week 5</th>
              <th scope="col">Week 6</th>
              <th scope="col">Week 7</th>
              <th scope="col">Week 8</th>
              <th scope="col">Week 9</th>
              <th scope="col">Week 10</th>
              <th scope="col">Week 11</th>
              <th scope="col">Week 12</th>
            </tr>
          </thead>
          <tbody>{map(user => UserRow(user), props.users)}</tbody>
        </body>
      </table>
    </Paper>
  </div>
)

const mapStateToProps = state => ({
  users: state.users
})

const connector = connect(mapStateToProps)
export default connector(ResultsTable)

{
  /*
class UserRow extends React.Component {
  render() {
    const user = this.props.user
    const userStatus = this.props.user.status
    if (userStatus === 'active') {
      return (
        <tr>
          <th colSpan="2" style={{ color: secondary }}>
            {user.name}
          </th>
        </tr>
      )
    } else {
      return (
        <tr>
          <th colSpan="2" style={{ color: primary }}>
            {user.name}
          </th>
        </tr>
      )
    }
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    )

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class UserTable extends React.Component {
  render() {
    const rows = []
    let lastCategory = null

    this.props.users.forEach(user => {
      if (user.pick !== lastCategory) {
        rows.push(<UserRow category={user.pick} key={user.name} />)
      }
      rows.push(<UserRow product={product} key={product.name} />)
      lastCategory = product.category
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
}
*/
}
