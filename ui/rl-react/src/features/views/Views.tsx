import { Link } from "react-router-dom";
import "./Views.css";

export function Views() {
  return (
    <div>
      <h2>Views</h2>
      <p>Für die Leinwand und alle, die wissen wollen, wann sie dran sind.</p>
      <nav className="view-links">
        <Link className="view-link" to="/views/next-race">
          Next Race
          <small>Wer gleich gegeneinander fährt ↗</small>
        </Link>
        <Link className="view-link" to="/views/upcoming-races">
          Upcoming Races
          <small>Die ganze Liste ↗</small>
        </Link>
        <Link className="view-link" to="/race-track">
          Race Track
          <small>Die Bahn mit den zwei Rädern, live animiert ↗</small>
        </Link>
      </nav>
    </div>
  );
}
