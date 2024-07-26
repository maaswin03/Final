import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import deer from "../Image/deer.jpg";
import elephant from "../Image/elephant.jpg";
import rat from "../Image/rat.jpg";
import nest from "../Image/nest.jpg";
import rhino from "../Image/rhino.jpg";
import crop from "../Image/crop.jpg";
import rabbit from "../Image/rabbit.jpeg";
import "../AnimalDeduction/AnimalDeduction.css";
import Footer from "../Components/Footer";

function AnimalDeduction() {
  const [animal1, setanimal1] = useState(false);
  const [animal2, setanimal2] = useState(false);
  const [animal3, setanimal3] = useState(false);
  const [animal4, setanimal4] = useState(false);
  const [animal5, setanimal5] = useState(false);
  const [animal6, setanimal6] = useState(false);
  const [animal7, setanimal7] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="animal1">
        <div className="animal2">
          <h1>Animal Detection</h1>
          <p>Safeguard your crops with precision</p>
          <div className="animal3"></div>
        </div>
      </div>

      {/* <div className="animal4">
        <div className="animal5">
          <h1>Field 1</h1>
          <p>Explore the map for detailed field insights.</p>
          <div className="animal6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1333.0024694876488!2d77.69008893312672!3d12.938855184988514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714217822268!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div> */}

      <div className="animal7">
        <div className="animal8">
          <span style={{ color: "rgb(234, 80, 73)" }}>
            Protecting Your Crops :{" "}
          </span>
          <span style={{ color: "rgb(46, 141, 78" }}>
            Defense Against Animal Attacks
          </span>
          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Grazing:</span>{" "}
              <span>
                Animals like deer, rabbits, and livestock can graze on crops,
                damaging leaves, stems, and fruits.
              </span>
              {animal1 ? (
                <p>
                  One effective solution to mitigate the impact of grazing
                  animals on crops is the use of physical barriers such as
                  fences or netting. Fences can be particularly effective for
                  larger animals like deer or livestock, while netting can help
                  protect crops from smaller animals like rabbits. Installing
                  sturdy fences around fields can create a physical barrier that
                  prevents animals from accessing crops, reducing the risk of
                  damage to leaves, stems, and fruits. Additionally, netting can
                  be used to cover individual plants or rows of crops, providing
                  a barrier that animals cannot easily penetrate.<br></br>
                  <br></br>Another approach is to use scare tactics to deter
                  grazing animals. Scarecrows, noise-making devices, or even the
                  presence of predator decoys can help create an environment
                  that is perceived as dangerous or inhospitable to animals.
                  These tactics work by startling animals and discouraging them
                  from approaching fields. By strategically placing scare
                  devices around fields, farmers can help protect their crops
                  from grazing animals.<br></br>
                  <br></br>
                  In addition to physical barriers and scare tactics, farmers
                  can also consider planting crops that are less attractive to
                  grazing animals. Some crops have strong odors or tastes that
                  animals find unappealing, making them less likely to be
                  targeted for grazing. By diversifying the types of crops
                  planted in fields and choosing varieties that are less
                  vulnerable to damage, farmers can reduce the risk of losses
                  due to grazing animals.
                </p>
              ) : (
                <p>
                  One effective solution to mitigate the impact of grazing
                  animals on crops is the use of physical barriers such as
                  fences or netting. Fences can be particularly effective for
                  larger animals like deer or livestock, while netting can help
                  protect crops from smaller animals like rabbits. Installing
                  sturdy fences around fields can create a physical barrier that
                  prevents animals from accessing crops, reducing the risk of
                  damage to leaves, stems, and fruits. Additionally, netting can
                  be used to cover individual plants or rows of crops, providing
                  a barrier that animals cannot easily penetrate.<br></br>
                  <br></br>Another approach is to use scare tactics to deter
                  grazing animals. Scarecrows, noise-making devices, or even the
                  presence of predator decoys can help create an environment
                  that is perceived as dangerous or inhospitable to animals.
                  These tactics work by startling animals and discouraging them
                  from approaching fields. By strategically placing scare
                  devices around fields, farmers can help protect their crops
                  from grazing animals.<br></br>
                  <br></br>
                </p>
              )}
              <button type="button" onClick={() => setanimal1(true)}>
                View More
              </button>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={deer} width="100%" />
              </div>
            </div>
          </div>
          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Trampling: </span>{" "}
              <span>
                Large animals walking through fields can trample crops, leading
                to physical damage and reduced yield.
              </span>
              {animal2 ? (
                <p>
                  One effective solution to mitigate trampling damage from large
                  animals is the use of controlled grazing practices. By
                  implementing rotational grazing systems or using temporary
                  fencing to control the movement of livestock, farmers can
                  prevent overgrazing and reduce the likelihood of animals
                  trampling crops. This approach allows farmers to manage the
                  impact of grazing animals on fields, ensuring that crops are
                  not damaged by excessive trampling.<br></br>
                  <br></br>
                  Another approach is to create designated pathways or walkways
                  for animals to follow when moving through fields. By
                  establishing clear routes for animals to travel, farmers can
                  minimize the risk of trampling damage to crops. This can be
                  achieved by fencing off areas where crops are planted and
                  creating alternative paths for animals to use. Additionally,
                  providing alternative grazing areas away from crops can help
                  reduce the pressure on fields and minimize trampling damage.
                </p>
              ) : (
                <p>
                  One effective solution to mitigate trampling damage from large
                  animals is the use of controlled grazing practices. By
                  implementing rotational grazing systems or using temporary
                  fencing to control the movement of livestock, farmers can
                  prevent overgrazing and reduce the likelihood of animals
                  trampling crops. This approach allows farmers to manage the
                  impact of grazing animals on fields, ensuring that crops are
                  not damaged by excessive trampling.<br></br>
                  <br></br>
                  Another approach is to create designated pathways or walkways
                  for animals to follow when moving through fields. By
                  establishing clear routes for animals to travel, farmers can
                  minimize the risk of trampling damage to crops. This can be
                  achieved by fencing off areas where crops are planted and
                  creating alternative paths for animals to use. Additionally,
                  providing alternative grazing areas away from crops can help
                  reduce the pressure on fields and minimize trampling damage.
                </p>
              )}
              <button type="button" onClick={() => setanimal2(true)}>
                View More
              </button>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={elephant} width="100%" />
              </div>
            </div>
          </div>
          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Browsing: </span>{" "}
              <span>
                Animals such as deer and rabbits may browse on plants, consuming
                leaves, buds, and fruits.
              </span>
              {animal3 ? (
                <p>
                  One effective solution to mitigate browsing damage from
                  animals like deer and rabbits is the use of repellents or
                  deterrents. These can be applied to plants to make them less
                  appealing to animals. There are many commercially available
                  repellents that can be sprayed on plants, creating a taste or
                  odor that deters animals from feeding. Additionally, physical
                  barriers such as fences or netting can be used to protect
                  plants from browsing animals. Fences can be particularly
                  effective for larger animals like deer, while netting can help
                  protect plants from smaller animals like rabbits.<br></br>
                  <br></br>
                  Another approach is to plant crops that are less attractive to
                  browsing animals. Some plants have strong odors or tastes that
                  animals find unappealing, making them less likely to be
                  browsed. By choosing plant varieties that are less vulnerable
                  to browsing, farmers can reduce the risk of damage to leaves,
                  buds, and fruits.<br></br>
                  <br></br>
                  Integrated pest management (IPM) techniques can also be
                  effective in managing browsing animals. This approach involves
                  using a combination of methods such as biological controls,
                  habitat manipulation, and cultural practices to reduce pest
                  populations. For example, introducing natural predators or
                  beneficial insects into the ecosystem can help control pest
                  populations that may damage crops.<br></br>
                  <br></br>
                  Lastly, creating buffer zones or planting non-preferred
                  vegetation around fields can provide alternative food sources
                  and shelter away from crops, reducing the likelihood of
                  browsing damage. By implementing a combination of these
                  strategies, farmers can effectively manage browsing animals
                  and protect their crops from damage.
                </p>
              ) : (
                <p>
                  One effective solution to mitigate browsing damage from
                  animals like deer and rabbits is the use of repellents or
                  deterrents. These can be applied to plants to make them less
                  appealing to animals. There are many commercially available
                  repellents that can be sprayed on plants, creating a taste or
                  odor that deters animals from feeding. Additionally, physical
                  barriers such as fences or netting can be used to protect
                  plants from browsing animals. Fences can be particularly
                  effective for larger animals like deer, while netting can help
                  protect plants from smaller animals like rabbits.<br></br>
                  <br></br>
                  Another approach is to plant crops that are less attractive to
                  browsing animals. Some plants have strong odors or tastes that
                  animals find unappealing, making them less likely to be
                  browsed. By choosing plant varieties that are less vulnerable
                  to browsing, farmers can reduce the risk of damage to leaves,
                  buds, and fruits.
                  <br></br>
                </p>
              )}
              <button type="button" onClick={() => setanimal3(true)}>
                View More
              </button>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={rabbit} width="100%" />
              </div>
            </div>
          </div>
          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Burrowing: </span>{" "}
              <span>
                Some animals like rodents may burrow underground, damaging roots
                and causing instability in the soil.
              </span>
              {animal4 ? (
                <p>
                  One effective solution to mitigate burrowing damage from
                  rodents is the use of physical barriers such as underground
                  fencing or wire mesh. These barriers can be buried underground
                  to prevent rodents from accessing the root systems of plants.
                  Additionally, raised beds or containers can be used for
                  planting to elevate the root zone above ground level, making
                  it more difficult for rodents to reach.<br></br>
                  <br></br>
                  Another approach is the use of natural predators or deterrents
                  to control rodent populations. Introducing predator species
                  like owls or installing owl boxes can help manage rodent
                  populations. Similarly, using scent deterrents or repellents
                  that are unpleasant to rodents can help deter them from
                  burrowing near crops. By employing these strategies, farmers
                  can effectively manage rodent populations and reduce the risk
                  of damage to roots and soil stability.
                </p>
              ) : (
                <p>
                  One effective solution to mitigate burrowing damage from
                  rodents is the use of physical barriers such as underground
                  fencing or wire mesh. These barriers can be buried underground
                  to prevent rodents from accessing the root systems of plants.
                  Additionally, raised beds or containers can be used for
                  planting to elevate the root zone above ground level, making
                  it more difficult for rodents to reach.<br></br>
                  <br></br>
                  Another approach is the use of natural predators or deterrents
                  to control rodent populations. Introducing predator species
                  like owls or installing owl boxes can help manage rodent
                  populations. Similarly, using scent deterrents or repellents
                  that are unpleasant to rodents can help deter them from
                  burrowing near crops. By employing these strategies, farmers
                  can effectively manage rodent populations and reduce the risk
                  of damage to roots and soil stability.
                </p>
              )}
              <button type="button" onClick={() => setanimal4(true)}>
                View More
              </button>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={rat} width="100%" />
              </div>
            </div>
          </div>
          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Nesting: </span>{" "}
              <span>
                Birds and small animals may build nests in fields, leading to
                crop damage and contamination.
              </span>
              {animal5 ? (
                <p>
                  To address the issue of nesting in fields by birds and small
                  animals, farmers can implement various strategies. One
                  effective solution is the use of deterrents, such as visual
                  scare tactics or sound devices, to discourage nesting. These
                  deterrents create an environment that is less appealing for
                  birds and small animals to build nests, reducing the risk of
                  crop damage and contamination.<br></br>
                  <br></br>
                  Modifying the habitat around fields is another approach to
                  mitigate nesting. Farmers can remove or reduce vegetation that
                  provides nesting sites, creating open spaces or planting
                  non-preferred vegetation. This encourages birds and small
                  animals to nest in alternative locations away from crops,
                  decreasing the likelihood of damage and contamination in
                  fields.Integrated pest management (IPM) techniques can also be
                  beneficial. By introducing natural predators or beneficial
                  insects, farmers can help control pest populations that may
                  attract nesting animals. Providing alternative nesting sites,
                  such as nesting boxes, can also help redirect nesting animals
                  to more suitable areas, further protecting crops from damage
                  and contamination.
                </p>
              ) : (
                <p>
                  To address the issue of nesting in fields by birds and small
                  animals, farmers can implement various strategies. One
                  effective solution is the use of deterrents, such as visual
                  scare tactics or sound devices, to discourage nesting. These
                  deterrents create an environment that is less appealing for
                  birds and small animals to build nests, reducing the risk of
                  crop damage and contamination.<br></br>
                  <br></br>
                  Modifying the habitat around fields is another approach to
                  mitigate nesting. Farmers can remove or reduce vegetation that
                  provides nesting sites, creating open spaces or planting
                  non-preferred vegetation. This encourages birds and small
                  animals to nest in alternative locations away from crops,
                  decreasing the likelihood of damage and contamination in
                  fields.Integrated pest management (IPM)
                </p>
              )}
              <button type="button" onClick={() => setanimal5(true)}>
                View More
              </button>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={nest} width="100%" />
              </div>
            </div>
          </div>

          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Feeding: </span>{" "}
              <span>
                Insects, birds, and mammals may feed on crops, consuming or
                damaging plant parts.
              </span>
              {animal6 ? (
                <p>
                  To mitigate the impact of feeding on crops by insects, birds,
                  and mammals, farmers can employ several strategies. One
                  effective solution is the use of biological controls, such as
                  introducing natural predators or parasites of pest species.
                  This approach can help manage pest populations and reduce the
                  need for chemical pesticides, minimizing damage to crops.
                  <br></br>
                  <br></br>
                  Another approach is the use of physical barriers, such as row
                  covers or netting, to protect crops from feeding animals.
                  These barriers can be particularly effective for smaller
                  animals like birds or insects. Additionally, scare tactics
                  such as scarecrows or noise-making devices can help deter
                  animals from feeding on crops.<br></br>
                  <br></br>
                  Integrated pest management (IPM) techniques can also be
                  beneficial in managing feeding damage. This approach involves
                  using a combination of methods, such as biological controls,
                  habitat manipulation, and cultural practices, to reduce pest
                  populations. For example, planting trap crops that are more
                  attractive to pests can help divert them away from main crops.
                  By employing these strategies, farmers can effectively manage
                  feeding damage and protect their crops.
                </p>
              ) : (
                <p>
                  To mitigate the impact of feeding on crops by insects, birds,
                  and mammals, farmers can employ several strategies. One
                  effective solution is the use of biological controls, such as
                  introducing natural predators or parasites of pest species.
                  This approach can help manage pest populations and reduce the
                  need for chemical pesticides, minimizing damage to crops.
                  <br></br>
                  <br></br>
                  Another approach is the use of physical barriers, such as row
                  covers or netting, to protect crops from feeding animals.
                  These barriers can be particularly effective for smaller
                  animals like birds or insects. Additionally, scare tactics
                  such as scarecrows or noise-making devices can help deter
                  animals from feeding on crops.
                </p>
              )}
              <button type="button" onClick={() => setanimal6(true)}>
                View More
              </button>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={rhino} width="100%" />
              </div>
            </div>
          </div>

          <div className="animal9">
            <div className="animal10 animal11">
              <span style={{ color: "black" }}>Disease Transmission: </span>{" "}
              <span>
                Animals can also transmit diseases to crops, affecting their
                health and yield.
              </span>
              <p>
                To reduce the risk of disease transmission from animals to
                crops, farmers can implement several strategies. Firstly,
                maintaining good farm hygiene is crucial, including regular
                removal of plant debris and animal waste that can harbor
                pathogens. Secondly, controlling animal access to fields through
                the use of fences or other barriers can help prevent direct
                contact between animals and crops, reducing the likelihood of
                disease transmission. Additionally, farmers can consider using
                disease-resistant crop varieties and practicing crop rotation to
                minimize the impact of diseases on their crops. These practices,
                combined with regular monitoring for signs of disease, can help
                farmers manage the risk of disease transmission and protect
                their crops.
              </p>
            </div>
            <div className="animal10 animal13">
              <div className="animal12">
                <img src={crop} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AnimalDeduction;
