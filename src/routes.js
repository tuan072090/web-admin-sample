import React from 'react'
import {BusinessListPage} from "./pages/business-unit/list/BusinessListPage";
import {BusinessCreatePage} from "./pages/business-unit/create/BusinessCreatePage";

// examples

const Colors = React.lazy(() => import('./documents/theme/colors/Colors'))
const Typography = React.lazy(() => import('./documents/theme/typography/Typography'))

const Accordion = React.lazy(() => import('./documents/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./documents/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./documents/base/cards/Cards'))
const Carousels = React.lazy(() => import('./documents/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./documents/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./documents/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./documents/base/navs/Navs'))
const Paginations = React.lazy(() => import('./documents/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./documents/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./documents/base/progress/Progress'))
const Spinners = React.lazy(() => import('./documents/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./documents/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./documents/base/tooltips/Tooltips'))

const Buttons = React.lazy(() => import('./documents/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./documents/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() => import('./documents/buttons/dropdowns/Dropdowns'))

const ChecksRadios = React.lazy(() => import('./documents/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('./documents/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./documents/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./documents/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./documents/forms/layout/Layout'))
const Range = React.lazy(() => import('./documents/forms/range/Range'))
const Select = React.lazy(() => import('./documents/forms/select/Select'))
const Validation = React.lazy(() => import('./documents/forms/validation/Validation'))

const CoreUIIcons = React.lazy(() => import('./documents/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./documents/icons/flags/Flags'))
const Brands = React.lazy(() => import('./documents/icons/brands/Brands'))

const Alerts = React.lazy(() => import('./documents/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./documents/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./documents/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./documents/notifications/toasts/Toasts'))

// const Login = React.lazy(() => import('./documents/examples/pages/login/Login'))
// const Register = React.lazy(() => import('./documents/examples/pages/register/Register'))
// const Page404 = React.lazy(() => import('./documents/examples/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./documents/examples/pages/page500/Page500'))

const Widgets = React.lazy(() => import('./documents/widgets/Widgets'))

const Charts = React.lazy(() => import('./documents/charts/Charts'))
const Dashboard = React.lazy(() => import('./documents/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/business-units', exact:true, name: 'Business Units', component: BusinessListPage },
  { path: '/business-units/create', name: 'Business Create', component: BusinessCreatePage },







  { path: '/documents/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/documents/theme/colors', name: 'Colors', component: Colors },
  { path: '/documents/theme/typography', name: 'Typography', component: Typography },
  { path: '/documents/base', name: 'Base', component: Cards, exact: true },
  { path: '/documents/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/documents/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/documents/base/cards', name: 'Cards', component: Cards },
  { path: '/documents/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/documents/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/documents/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/documents/base/navs', name: 'Navs', component: Navs },
  { path: '/documents/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/documents/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/documents/base/progress', name: 'Progress', component: Progress },
  { path: '/documents/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/documents/base/tables', name: 'Tables', component: Tables },
  { path: '/documents/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/documents/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/documents/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/documents/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/documents/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/documents/charts', name: 'Charts', component: Charts },
  { path: '/documents/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/documents/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/documents/forms/select', name: 'Select', component: Select },
  { path: '/documents/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/documents/forms/range', name: 'Range', component: Range },
  { path: '/documents/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/documents/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/documents/forms/layout', name: 'Layout', component: Layout },
  { path: '/documents/forms/validation', name: 'Validation', component: Validation },
  { path: '/documents/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/documents/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/documents/icons/flags', name: 'Flags', component: Flags },
  { path: '/documents/icons/brands', name: 'Brands', component: Brands },
  { path: '/documents/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/documents/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/documents/notifications/badges', name: 'Badges', component: Badges },
  { path: '/documents/notifications/modals', name: 'Modals', component: Modals },
  { path: '/documents/notifications/toasts', name: 'Toasts', component: Toasts },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
  { path: '/documents/widgets', name: 'Widgets', component: Widgets },

  //
  //  Page routers
  //

]

export default routes
