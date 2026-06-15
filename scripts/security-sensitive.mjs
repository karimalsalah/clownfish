export const SECURITY_TEXT_PATTERN =
  /\b(?:vulnerabilit(?:y|ies)|cve-\d+|ghsa|exploit|ssrf|xss|csrf|rce|(?:sql|command|code|prompt)\s*injection|auth(?:entication|orization)?\s*bypass|privilege\s+escalation|sensitive\s+data|security[-_\s]?sensitive|security[-_\s]?boundary|security\s*:|security\([^)]+\)|(?:fix|feat|refactor|chore|docs|test|ci|build|perf)\(security\)|security\s+(?:issue|bug|advisory|triage|review|re-evaluation|flag)|merge-risk:\s*[^\n,;]*security|flagged\s+as\s+suspicious|secretref|auth(?:entication|orization)?[-_\s]?(?:boundary|scope|revocation|permission)|(?:secret|credential|api[-_\s]?key|private[-_\s]?key|token).{0,80}(?:leak(?:ed|age)?|expos(?:e|ed|ure)|plaintext|plain[-_\s]?text|residue)|(?:leak(?:ed|age)?|expos(?:e|ed|ure)|plaintext|plain[-_\s]?text|residue).{0,80}(?:secret|credential|api[-_\s]?key|private[-_\s]?key|token|context|workspace)|privacy.{0,80}(?:leak(?:ed|age)?|expos(?:e|ed|ure)))/i;

export function hasSecuritySensitiveText(...values) {
  return SECURITY_TEXT_PATTERN.test(flattenSecurityText(values));
}

export function securityTextFromItem(item) {
  if (!item || typeof item !== "object") return "";
  return flattenSecurityText([
    item.title,
    item.body_excerpt,
    item.hydration_error,
    item.labels,
    item.pull_request?.files?.map((file) => file?.filename),
  ]);
}

function flattenSecurityText(values) {
  const out = [];
  for (const value of values.flat(Infinity)) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      out.push(flattenSecurityText(value));
    } else if (typeof value === "object") {
      out.push(JSON.stringify(value));
    } else {
      out.push(String(value));
    }
  }
  return out.join("\n");
}
