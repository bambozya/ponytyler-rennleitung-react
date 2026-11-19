import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { getCurrentShow, type Show } from "../../api/show";
import type { ApiError } from "../../api/http";

export function DirectorDashboardRedirect() {
  const navigate = useNavigate();
  const [show, setShow] = useState<Show | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    getCurrentShow().then(
      (current) => {
        if (cancelled) return;
        setShow(current);
        navigate(`/show/${current.id}/director-dashboard`);
      },
      (cause: ApiError) => {
        if (cancelled) return;
        const message = (cause?.error as { message?: string } | null)?.message;
        setError(message || "The current show could not be loaded.");
      },
    );
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  if (error) {
    return <p style={{ padding: 10, color: "#fff", backgroundColor: "#860606" }}>{error}</p>;
  }

  return (
    <>
      <p>We will be redirecting you to the current race now. Please wait.</p>
      {show && <p>Show {show.name} found.</p>}
      <CircularProgress />
    </>
  );
}
