export type SubscriptionChangePreview = {
  change: SubscriptionChangeDescription
  currency: string
  paymentMethod: string
  nextPlan: {
    annual: boolean
  }
  immediateCharge: {
    subtotal: number
    tax: number
    total: number
  }
  nextInvoice: {
    date: string
    plan: {
      name: string
      amount: number
    }
    addOns: AddOn[]
    subtotal: number
    tax: {
      rate: number
      amount: number
    }
    total: number
  }
}

type AddOn = {
  code: string
  name: string
  quantity: number
  unitAmount: number
  amount: number
}

export type SubscriptionChangeDescription =
  | AddOnPurchase
  | AddOnUpdate
  | PremiumSubscription

export type AddOnPurchase = {
  type: 'add-on-purchase'
  addOn: Pick<AddOn, 'code' | 'name'>
}

export type AddOnUpdate = {
  type: 'add-on-update'
  addOn: Pick<AddOn, 'code' | 'quantity'> & {
    prevQuantity: AddOn['quantity']
  }
}

type PremiumSubscription = {
  type: 'premium-subscription'
  plan: {
    code: string
    name: string
  }
}
