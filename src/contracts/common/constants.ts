import { fromText } from "lucid-cardano";

import {
  INACTIVE_PROJECT_UTXO_ADA,
  PROJECT_CLOSE_DISCOUNT_CENTS,
  PROJECT_DELIST_DISCOUNT_CENTS,
  PROJECT_DETAIL_UTXO_ADA,
  PROJECT_FUNDS_WITHDRAWAL_DISCOUNT_RATIO,
  PROJECT_NEW_MILESTONE_DISCOUNT_CENTS,
  PROJECT_SCRIPT_CLOSE_DISCOUNT_CENTS,
  PROJECT_SCRIPT_DELIST_DISCOUNT_CENTS,
  PROJECT_SCRIPT_UTXO_ADA,
  RATIO_MULTIPLIER,
  TREASURY_REVOKE_DISCOUNT_CENTS,
  TREASURY_UTXO_MIN_ADA,
  TREASURY_WITHDRAWAL_DISCOUNT_RATIO,
  TREASURY_MIN_WITHDRAWAL_ADA,
  PROJECT_IMMEDIATE_CLOSURE_TX_TIME_SLIPPAGE,
  PROOF_OF_BACKING_PLANT_TX_TIME_SLIPPAGE,
  PROJECT_SPONSORSHIP_RESOLUTION,
} from "@/transactions/constants";
import { Hex } from "@/types";

import { helios } from "../program";

// FIXME: Redo this module...

export const PROTOCOL_NFT_TOKEN_NAMES = {
  PARAMS: fromText("params"),
  PROPOSAL: fromText("proposal"),
};

export const PROJECT_AT_TOKEN_NAMES = {
  PROJECT: fromText("project"),
  PROJECT_DETAIL: fromText("project-detail"),
  PROJECT_SCRIPT: fromText("project-script"),
};

export const PROOF_OF_BACKING_TOKEN_NAMES = {
  SEED: fromText("seed"),
  WILTED_FLOWER: fromText("wilted-flower"),
};

export const TEIKI_TOKEN_NAME: Hex = fromText("teiki");

export const TEIKI_PLANT_NFT_TOKEN_NAME: Hex = fromText("teiki-plant");

export const MIGRATE_TOKEN_NAME: Hex = fromText("migration");

export const INACTIVE_BACKING_CLEANUP_DISCOUNT_CENTS = 20n;

export default helios("constants")`
  module constants

  const ADA_MINTING_POLICY_HASH: MintingPolicyHash = MintingPolicyHash::new(#)

  const ADA_TOKEN_NAME: ByteArray = #

  const PROTOCOL_PARAMS_NFT_TOKEN_NAME: ByteArray =
    #${PROTOCOL_NFT_TOKEN_NAMES.PARAMS}

  const PROTOCOL_PROPOSAL_NFT_TOKEN_NAME: ByteArray =
    #${PROTOCOL_NFT_TOKEN_NAMES.PROPOSAL}

  const PROJECT_AT_TOKEN_NAME: ByteArray =
    #${PROJECT_AT_TOKEN_NAMES.PROJECT}

  const PROJECT_DETAIL_AT_TOKEN_NAME: ByteArray =
    #${PROJECT_AT_TOKEN_NAMES.PROJECT_DETAIL}

  const PROJECT_SCRIPT_AT_TOKEN_NAME: ByteArray =
    #${PROJECT_AT_TOKEN_NAMES.PROJECT_SCRIPT}

  const TEIKI_TOKEN_NAME: ByteArray = #${TEIKI_TOKEN_NAME}

  const TEIKI_PLANT_NFT_TOKEN_NAME: ByteArray = #${TEIKI_PLANT_NFT_TOKEN_NAME}

  const RATIO_MULTIPLIER: Int = ${RATIO_MULTIPLIER.toString()}

  // Project constants
  const INACTIVE_PROJECT_UTXO_ADA: Int = ${INACTIVE_PROJECT_UTXO_ADA.toString()}

  const PROJECT_CLOSE_DISCOUNT_CENTS: Int = ${PROJECT_CLOSE_DISCOUNT_CENTS.toString()}

  const PROJECT_DELIST_DISCOUNT_CENTS: Int = ${PROJECT_DELIST_DISCOUNT_CENTS.toString()}

  const PROJECT_DETAIL_UTXO_ADA: Int = ${PROJECT_DETAIL_UTXO_ADA.toString()}

  const PROJECT_FUNDS_WITHDRAWAL_DISCOUNT_RATIO: Int = ${PROJECT_FUNDS_WITHDRAWAL_DISCOUNT_RATIO.toString()}

  const PROJECT_IMMEDIATE_CLOSURE_TX_TIME_SLIPPAGE: Duration
    = Duration::new(${PROJECT_IMMEDIATE_CLOSURE_TX_TIME_SLIPPAGE.toString()})

  const PROJECT_NEW_MILESTONE_DISCOUNT_CENTS: Int = ${PROJECT_NEW_MILESTONE_DISCOUNT_CENTS.toString()}

  const PROJECT_SCRIPT_CLOSE_DISCOUNT_CENTS: Int = ${PROJECT_SCRIPT_CLOSE_DISCOUNT_CENTS.toString()}

  const PROJECT_SCRIPT_DELIST_DISCOUNT_CENTS: Int = ${PROJECT_SCRIPT_DELIST_DISCOUNT_CENTS.toString()}

  const PROJECT_SCRIPT_UTXO_ADA: Int = ${PROJECT_SCRIPT_UTXO_ADA.toString()}

  const PROJECT_SPONSORSHIP_RESOLUTION: Duration = Duration::new(${PROJECT_SPONSORSHIP_RESOLUTION.toString()})

  const PROJECT_AT_MIGRATE_IN: Option[MintingPolicyHash] = Option[MintingPolicyHash]::None

  // Backing
  const INACTIVE_BACKING_CLEANUP_DISCOUNT_CENTS: Int = ${INACTIVE_BACKING_CLEANUP_DISCOUNT_CENTS.toString()}

  const PROOF_OF_BACKING_PLANT_TX_TIME_SLIPPAGE: Duration
    = Duration::new(${PROOF_OF_BACKING_PLANT_TX_TIME_SLIPPAGE.toString()})

  const PROOF_OF_BACKING_MIGRATE_IN: Option[MintingPolicyHash] = Option[MintingPolicyHash]::None

  // Treasury
  const TREASURY_MIN_WITHDRAWAL_ADA: Int = ${TREASURY_MIN_WITHDRAWAL_ADA.toString()}

  const TREASURY_WITHDRAWAL_DISCOUNT_RATIO: Int = ${TREASURY_WITHDRAWAL_DISCOUNT_RATIO.toString()}

  const TREASURY_REVOKE_DISCOUNT_CENTS: Int = ${TREASURY_REVOKE_DISCOUNT_CENTS.toString()}

  const TREASURY_UTXO_MIN_ADA: Int = ${TREASURY_UTXO_MIN_ADA.toString()}
`;
