export const enum ART_STATS {
  CRIT_CHANCE = 'crit_chance',
  CRIT_DMG = 'crit_dmg',
  ATTACK = 'attack',
  HP = 'hp',
  ARMOR = 'armor',
}

export const enum ART_NUMBERS {
  MAIN = 'main',
  SUB = 'sub',
  MAX_SUBS = 'max_subs',
}

export type Artifact = Record<ART_STATS[number], number>;

export type StatsType = ART_NUMBERS.MAIN | ART_NUMBERS.SUB;
