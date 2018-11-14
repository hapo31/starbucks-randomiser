interface BaseMenu {
  type: string;
  name: string;
  selectable_temperature: boolean;
  default_temperature: string;
  topping_ids: number[];
}
