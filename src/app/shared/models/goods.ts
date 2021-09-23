import { Appliances } from "./appliances";
import { ComputersPeripherals } from "./computers-peripherals";
import { Electronics } from "./electronics";
import { Furniture } from "./furniture";
import { Hobbies } from "./hobbies";

export interface Goods {
  appliances: Appliances;
  electronics: Electronics;
  "computers-peripherals": ComputersPeripherals;
  furniture: Furniture;
  hobbies: Hobbies;
}
