import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    _component: 'CNavTitle',
    anchor: 'Quản lý',
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Business Units',
    to: '/business-units',
    icon: <CIcon name="cil-bank" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'List',
        to: '/business-units',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Create',
        to: '/business-units/create',
      },
    ]
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Cửa hàng',
    to: '/stores',
    icon: <CIcon name="cil-restaurant" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'List',
        to: '/stores/list',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Create',
        to: '/stores/create',
      },
    ]
  },




  //  Documents
  {
    _component: 'CNavTitle',
    anchor: 'Documents',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Colors',
    to: '/documents/theme/colors',
    icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Typography',
    to: '/documents/theme/typography',
    icon: <CIcon name="cil-pencil" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Base',
    to: '/documents/to',
    icon: <CIcon name="cil-puzzle" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Accordion',
        to: '/documents/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Breadcrumb',
        to: '/documents/base/breadcrumbs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Cards',
        to: '/documents/base/cards',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Carousel',
        to: '/documents/base/carousels',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Collapse',
        to: '/documents/base/collapses',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'List group',
        to: '/documents/base/list-groups',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Navs & Tabs',
        to: '/documents/base/navs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pagination',
        to: '/documents/base/paginations',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Popovers',
        to: '/documents/base/popovers',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Progress',
        to: '/documents/base/progress',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Spinners',
        to: '/documents/base/spinners',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tables',
        to: '/documents/base/tables',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tooltips',
        to: '/documents/base/tooltips',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Buttons',
    icon: <CIcon name="cil-cursor" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Buttons',
        to: '/documents/buttons/buttons',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Buttons groups',
        to: '/documents/buttons/button-groups',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Dropdowns',
        to: '/documents/buttons/dropdowns',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Forms',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Form Control',
        to: '/documents/forms/form-control',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Select',
        to: '/documents/forms/select',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Checks & Radios',
        to: '/documents/forms/checks-radios',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Range',
        to: '/documents/forms/range',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Input Group',
        to: '/documents/forms/input-group',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Floating Labels',
        to: '/documents/forms/floating-labels',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Layout',
        to: '/documents/forms/layout',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Validation',
        to: '/documents/forms/validation',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Charts',
    to: '/documents/charts',
    icon: <CIcon name="cil-chart-pie" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    anchor: 'Icons',
    icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Free',
        to: '/documents/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Flags',
        to: '/documents/icons/flags',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Brands',
        to: '/documents/icons/brands',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Notifications',
    icon: <CIcon name="cil-bell" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Alerts',
        to: '/documents/notifications/alerts',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Badges',
        to: '/documents/notifications/badges',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Modal',
        to: '/documents/notifications/modals',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Toasts',
        to: '/documents/notifications/toasts',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Widgets',
    to: '/documents/widgets',
    icon: <CIcon name="cil-calculator" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    _component: 'CNavGroup',
    anchor: 'Pages',
    icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Login',
        to: '/login',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Register',
        to: '/register',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 404',
        to: '/404',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
