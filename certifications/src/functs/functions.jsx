import { CertificationsSection } from "../components/certificationsSection";
import { certificatesInformation } from "../constants/certificationsInfo";

export const renderCertificates = (isEn) => {
    const allCertificates = [];

    for (const cert of Object.values(certificatesInformation)) {
        allCertificates.push(
            <CertificationsSection
                imgClass={cert.class}
                description={isEn ? cert.description.en : cert.description.es}
                key={cert.key}
            >
                {isEn ? cert.name.en : cert.name.es}
            </CertificationsSection>
        );
    }

    return allCertificates;
};