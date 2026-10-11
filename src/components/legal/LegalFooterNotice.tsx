import { SITE_CONFIG } from "@/content/site.config";

export default function LegalFooterNotice() {
  return (
    <div className="legal-footer-notice">
      <div className="legal-footer-notice-inner">
        <div className="legal-footer-notice-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <div className="legal-footer-notice-body">
          <p className="legal-footer-notice-label">Reserved Rights</p>
          <p className="legal-footer-notice-text">
            {SITE_CONFIG.brandName} reserves the right to update, amend,
            suspend, or replace any part of this document at any time, with
            or without prior notice. The most current version is always
            published on this page and supersedes all previous versions.
            Continued use of the Service after any change constitutes your
            acceptance of the revised terms.
          </p>
          <p className="legal-footer-notice-text">
            All interpretations, decisions, and enforcement actions related
            to this document are made at the sole discretion of{" "}
            {SITE_CONFIG.brandName} and are final and binding. Where local
            law provides mandatory consumer protections, those provisions
            apply only to the extent required by law.
          </p>
        </div>
      </div>
    </div>
  );
}
