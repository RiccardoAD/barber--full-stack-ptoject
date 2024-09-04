import React from 'react';

function BarberServices() {
  return (
    <section className="container" style={{ maxWidth: '36rem' }}>
      <h2 className="text-center display-5 py-4 text-danger">Barber Services</h2>
      <ul className="row g-2 text-center mx-auto" style={{ maxWidth: '72rem' }}>
        <div className="text-start">
          <div className="d-flex align-items-end">
            <h2 className="fw-bold" style={{ minWidth: 'fit-content' }}>Signature Cut & Style</h2>
            <div className="flex-grow-1 border-bottom border-secondary mb-1"></div>
            <p className="mb-0">$45.00+</p>
          </div>
          <p>First visit ? Please book this service!</p>
        </div>
        <div className="text-start">
          <div className="d-flex align-items-end">
            <h2 className="fw-bold" style={{ minWidth: 'fit-content' }}>Maintenance Cut</h2>
            <div className="flex-grow-1 border-bottom border-secondary mb-1"></div>
            <p className="mb-0">$35.00+</p>
          </div>
          <p>30 min service with just the basics.</p>
        </div>
        <div className="text-start">
          <div className="d-flex align-items-end">
            <h2 className="fw-bold" style={{ minWidth: 'fit-content' }}>Barber Cut - 13 & Under</h2>
            <div className="flex-grow-1 border-bottom border-secondary mb-1"></div>
            <p className="mb-0">$31.00+</p>
          </div>
          <p>Barber style haircuts (clipper and short scissor cuts)</p>
        </div>
        <div className="text-start">
          <div className="d-flex align-items-end">
            <h2 className="fw-bold" style={{ minWidth: 'fit-content' }}>Advanced Fade/Design</h2>
            <div className="flex-grow-1 border-bottom border-secondary mb-1"></div>
            <p className="mb-0">$65.00+</p>
          </div>
          <p>$1/min</p>
        </div>
        <div className="text-start">
          <div className="d-flex align-items-end">
            <h2 className="fw-bold" style={{ minWidth: 'fit-content' }}>Beard Trim</h2>
            <div className="flex-grow-1 border-bottom border-secondary mb-1"></div>
            <p className="mb-0">$22.00+</p>
          </div>
        </div>
        <div className="text-start">
          <div className="d-flex align-items-end">
            <h2 className="fw-bold" style={{ minWidth: 'fit-content' }}>Scalp Treatment</h2>
            <div className="flex-grow-1 border-bottom border-secondary mb-1"></div>
            <p className="mb-0">$22.00+</p>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default BarberServices;