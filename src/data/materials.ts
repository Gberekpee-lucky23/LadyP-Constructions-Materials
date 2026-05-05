import sharpSand from "@/assets/sharp-sand.jpg";
import plasteringSand from "@/assets/plastering-sand.jpg";
import allPurposeSand from "@/assets/all-purpose-sand.jpg";
import mud from "@/assets/mud.jpg";
import graniteDust from "@/assets/granite-dust.jpg";
import graniteChippings from "@/assets/granite-chippings.jpg";
import ballast from "@/assets/ballast.jpg";
import cement from "@/assets/cement.jpg";
import blocks from "@/assets/blocks.jpg";

export type Material = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const MATERIALS: Material[] = [
  { slug: "sharp-sand", name: "Sharp Sand", description: "Coarse, gritty sand ideal for concrete and screeding work.", image: sharpSand },
  { slug: "plastering-sand", name: "Plastering Sand", description: "Fine, soft sand perfect for smooth wall plastering.", image: plasteringSand },
  { slug: "all-purpose-sand", name: "All-Purpose Sand", description: "Versatile sand for general building and landscaping.", image: allPurposeSand },
  { slug: "mud", name: "Mud", description: "Quality fill mud for foundations and site leveling.", image: mud },
  { slug: "granite-dust", name: "Granite Dust", description: "Fine crushed granite for paving base and compacting.", image: graniteDust },
  { slug: "granite-chippings", name: "3/4 Granite Chippings", description: "Premium 3/4\" crushed granite for concrete and drainage.", image: graniteChippings },
  { slug: "ballast", name: "Ballast", description: "Pre-mixed sand and gravel aggregate for ready concrete.", image: ballast },
  { slug: "cement", name: "Cement", description: "Top-grade cement bags from trusted Nigerian brands.", image: cement },
  { slug: "blocks", name: "Blocks", description: "Strong, uniform concrete blocks for solid construction.", image: blocks },
];
