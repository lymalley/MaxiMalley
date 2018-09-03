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
