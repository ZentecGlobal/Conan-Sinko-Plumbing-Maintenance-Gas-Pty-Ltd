import {
  AlertTriangle,
  Caravan,
  Droplet,
  Droplets,
  Filter,
  Flame,
  Hammer,
  ShowerHead,
  Thermometer,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "emergency-plumbing": AlertTriangle,
  "blocked-drains": Droplet,
  "water-filtration-specialist": Filter,
  "caravan-plumbing": Caravan,
  "stormwater-drainage": Droplets,
  "gas-lpg": Flame,
  excavation: Hammer,
  "plumbing-maintenance-repair": Wrench,
  "hot-water-systems": Thermometer,
  "bathroom-renovation-plumbing": ShowerHead,
};
