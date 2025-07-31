import { type FooterProps } from "../libs/types";

export function Footer(Props: FooterProps) {
    return (
        <footer className="text-secondary text-center p-2 bg-light mt-auto">
        Copyright © {Props.year} {Props.fullName} {Props.studentId}
      </footer>
    );
}