import { useEffect } from "react";

const REDIRECT_MAP = {
  "/fundwell/line-of-credit": "https://www.fundwell.com/green-raven?utm_campaign=green-raven&utm_source=sled_referral&utm_medium=channel",
  "/fundwell/learn-more":     "https://www.fundwell.com",
  "/fundwell/how-it-works":   "https://www.fundwell.com",
};

export default function FundwellRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}