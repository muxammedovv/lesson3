import "./Product.css";

const Product = () => {
  return (
    <div className="container">
      <div className="seeds">
        <div className="indica">
          <img src="/seed1.png" alt="Seed" />
          <h2>Indica</h2>
          <p>
            This type of cannabis is commonly taken by those who want to sink
            into a state of total relaxation in every limb. This reduces stress
            overall and can take your worries and fatigue away. Because of its
            relaxing effects, it is suggested to use this type of cannabis at
            night. It is particularly recommended for people who have trouble
            sleeping, be it due to insomnia, pain or other associated sleep
            issues.
          </p>
          <button>Shop Indica</button>
        </div>

        <div className="sativa">
          <img src="/seed2.png" alt="Seed" />
          <h2>Sativa</h2>
          <p>
            Contrary to the deep all-body relaxation that comes with the use of
            indica strains, sativas are known for increasing the feeling of
            creativity, enhancing focus and lessening anxiety. This is more of a
            mind-centered high in terms of how and where you will feel the
            effects. Given its stimulating nature, it is recommended to use this
            during the day.
          </p>
          <button>Shop Sativa</button>
        </div>

        <div className="hybrids">
          <img src="/seed3.png" alt="Seed" />
          <h2>Hybrids</h2>
          <p>
            Hybrid strains are just that – they combine the head-focused high
            effects of sativas with the bodily relaxation of indicas. This is
            ideal for people who really want to sooth any fatigue and worries
            while also clearing the mind ready to focus fresh on something new.
            Hybrids are expertly tailored to result in strains with specific
            effects. Useful strain vocabulary to familiarize yourself with when
            it comes to hybrids includes sativa-dominant (full, bodily
            relaxation), indica-dominant (boosting creativity, increasing mood
            and lessening anxiety) and balanced (the best of both worlds).
          </p>
          <button>Shop Hybrids</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
