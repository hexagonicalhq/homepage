import { Button } from "@/components/ui/button";
import React from "react";

export const PrivacyPolicy: React.FC = () => (
    <>
        <Button className="" onClick={() => {window.location.href = "/legal/tos"}}>ToS</Button>
        <Button>Privacy Policy</Button>
    </>
);