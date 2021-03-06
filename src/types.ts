export enum PartType {
  TRANSISTOR = "Transistor",
  DIODE = "Diode",
  RESISTOR = "Resistor",
  CAPACITOR = "Capacitor",
  POLARIZED_CAP = "Polarized Capacitor",
  IC = "IC",
  POTENTIOMETER = "Potentiometer",
  SWITCH = "Switch",
  OP_AMP = "Op Amp",
}

export const PART_TYPES = Object.values(PartType);

export interface NewAvailablePart {
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

export interface AvailablePart {
  id: number;
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

export interface RequiredPart {
  id: number;
  pedal_id: number;
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

export interface NewRequiredPart {
  part_name: string;
  part_kind: PartType;
  quantity: number;
}

export enum PedalKind {
  OVERDRIVE = "Overdrive",
  DISTORTION = "Distortion",
  FUZZ = "Fuzz",
  DELAY = "Delay",
  MODULATION = "Modulation",
  REVERB = "Reverb",
  COMPRESSOR = "Compressor",
  BOOST = "Boost",
}

export const PEDAL_KINDS = Object.values(PedalKind);

export interface Pedal {
  id: number;
  name: string;
  kind: PedalKind;
  build_doc_link?: string;
  created_at?: Date;
  updated_at?: Date;
  required_parts?: RequiredPart[];
}

export interface NewPedal {
  name: string;
  kind: PedalKind;
  build_doc_link?: string;
}

export interface ClosePedal {
  id: number;
  name: String;
  kind: PedalKind;
  short_parts: RequiredPart[];
  required_parts: RequiredPart[];
}
