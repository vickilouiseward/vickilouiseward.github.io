import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router';
import style from './style.module.css'

class Nav extends React.Component {
  render() {
    const { items } = this.props
    return (
      <Location>
        {({ location }) => (
          <nav>
            <ul className={style.list}>
              {items.map(item => (
                <li key={item.node.id} className={style.item}>
                  <Link
                    to={item.node.route}
                    className={`${style.link} ${
                      location.pathname === item.node.route
                        ? style.isActive
                        : ''
                    }`}
                  >
                    {item.node.page}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
       </Location>
    )
  }
}

Nav.propTypes = {
  items: PropTypes.array,
}

export default Nav
