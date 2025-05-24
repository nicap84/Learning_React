import React from "react";
import { Link, useLocation } from "react-router";

export function Home() {
  return (
    <div>
      <h1>[Company website]</h1>
      <nav>
        <Link to="about">About</Link>
        <br />
        <Link to="events">Events</Link>
        <br />
        <Link to="products">Products</Link>
        <br />
        <Link to="contact">Contact</Link>
        <br />
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>Resource Not Found {location.pathname}</h1>
    </div>
  );
}
