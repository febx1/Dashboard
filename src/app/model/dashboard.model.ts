export interface DashboardData {
  top_cards: TopCard[]
  new_users: NewUser[]
  recent_orders: RecentOrder[]
}

export interface TopCard {
  header: string
  sub_header: string
  value: number
}

export interface NewUser {
  id: string
  picture: string
  name: string
  isActive: boolean
  country: string
  progress: number
}

export interface RecentOrder {
  id: string
  name: string
  product: string
  delivery_date: string
  status: string
  tracking_no: string
  shipping: boolean
}


export interface PopupModalData {
  customerName: string,
  product: string,

}
