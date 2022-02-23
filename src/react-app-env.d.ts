/// <reference types="react-scripts" />
interface MessageToRender {
  content: string | null,
  senderId: number,
}

interface Message extends MessageToRender {
  id: number,
}

interface PlanCardToRender {
  isChatIncluded: boolean,
  name: string,
  description: string,
  amount: string,
}

interface PlanCard extends PlanCardToRender {
  id: number,
}

interface StatsCardToRender {
  rate: string,
  title: string,
  description: string,
}

interface StatsCard extends StatsCardToRender {
  id: number,
}
