import { AvailableIcons } from "@/domains";
import {
  ClipboardText,
  Coin,
  Swap,
  Checks,
  CreditCard,
  Money,
  HandCoins,
  TreePalm,
  Backpack,
  FirstAid,
  Shuffle,
  File,
  Paperclip,
  EnvelopeOpen,
  SmileyXEyes,
  Smiley,
  MapPin,
  HouseLine,
  Boot,
  CalendarCheck,
  Archive,
} from "@phosphor-icons/react";

export const getAvailableIconByName = (iconName: AvailableIcons) => {
  switch (iconName) {
    case "ClipboardText":
      return ClipboardText;
    case "Coin":
      return Coin;
    case "Swap":
      return Swap;
    case "Checks":
      return Checks;
    case "CreditCard":
      return CreditCard;
    case "Money":
      return Money;
    case "HandCoins":
      return HandCoins;
    case "TreePalm":
      return TreePalm;
    case "Backpack":
      return Backpack;
    case "FirstAid":
      return FirstAid;
    case "Shuffle":
      return Shuffle;
    case "File":
      return File;
    case "Paperclip":
      return Paperclip;
    case "EnvelopeOpen":
      return EnvelopeOpen;
    case "SmileyXEyes":
      return SmileyXEyes;
    case "Smiley":
      return Smiley;
    case "MapPin":
      return MapPin;
    case "HouseLine":
      return HouseLine;
    case "Boot":
      return Boot;
    case "CalendarCheck":
      return CalendarCheck;
    case "Archive":
      return Archive;

    default:
      return TreePalm;
  }
};
