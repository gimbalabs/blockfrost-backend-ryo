import * as ResponseTypes from '../types/responses/ledger';
import { Network } from '../types/common';

export const GENESIS: Record<Network, ResponseTypes.Ledger> = {
  mainnet: {
    active_slots_coefficient: 0.05,
    update_quorum: 5,
    max_lovelace_supply: '45000000000000000',
    network_magic: 764_824_073,
    epoch_length: 432_000,
    system_start: 1_506_203_091,
    slots_per_kes_period: 129_600,
    slot_length: 1,
    max_kes_evolutions: 62,
    security_param: 2160,
  },
  testnet: {
    active_slots_coefficient: 0.05,
    update_quorum: 5,
    max_lovelace_supply: '45000000000000000',
    network_magic: 1_097_911_063,
    epoch_length: 432_000,
    system_start: 1_563_999_616,
    slots_per_kes_period: 129_600,
    slot_length: 1,
    max_kes_evolutions: 62,
    security_param: 2160,
  },
  preview: {
    active_slots_coefficient: 0.05,
    update_quorum: 5,
    max_lovelace_supply: '45000000000000000',
    network_magic: 2,
    epoch_length: 86_400,
    system_start: 1_660_003_200,
    slots_per_kes_period: 86_400,
    slot_length: 1,
    max_kes_evolutions: 120,
    security_param: 432,
  },
  preprod: {
    active_slots_coefficient: 0.05,
    update_quorum: 5,
    max_lovelace_supply: '45000000000000000',
    network_magic: 1,
    epoch_length: 432_000,
    system_start: 1_654_041_600,
    slots_per_kes_period: 86_400,
    slot_length: 1,
    max_kes_evolutions: 120,
    security_param: 2160,
  },
};