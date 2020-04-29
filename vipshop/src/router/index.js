import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classify from '@/components/classify'
import shoppingtrolley from '@/components/shoppingtrolley'
import personal from '@/components/personal'
import indextext from '@/components/indextext'
import particulars from '@/components/particulars'
import payments from '@/components/payments'
import address from '@/components/address'
import headportrait from '@/components/headportrait'
import setadress from '@/components/setadress'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
	{
	  path: '/classify',
	  name: 'classify',
	  component: classify
	},
	{
	  path: '/shoppingtrolley',
	  name: 'shoppingtrolley',
	  component: shoppingtrolley
	},
	{
	  path: '/personal',
	  name: 'personal',
	  component: personal
	},
	{
	  path: '/indextext',
	  name: 'indextext',
	  component: indextext
	},
  {
    path: '/particulars',
    name: 'particulars',
    component: particulars
  },
  {
    path: '/payments',
    name: 'payments',
    component: payments
  },
  {
    path: '/address',
    name: 'address',
    component: address
  },
  {
    path: '/headportrait',
    name: 'headportrait',
    component: headportrait
  },
  {
    path: '/setadress',
    name: 'setadress',
    component: setadress
  }
  ]
})
