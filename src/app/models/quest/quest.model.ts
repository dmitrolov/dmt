export interface Quest extends DomItem {
  deadline: number;
  reward: QuestReward;
}

interface QuestReward {
  experience: number;
  money: number;
  items: string[];
  description?: string;
}
