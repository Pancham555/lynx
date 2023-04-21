import Slider from "@/components/components/slider";
import React from "react";

const ShowCaseWork = () => {
  const images = [{
    from: "From Leonardo AI", images: [
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/060bd3b1-246e-4c90-8806-c7e440a809e2/Leonardo_Diffusion_a_deer_with_big_horns_having_a_muscular_bod_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/519ec2a2-3947-400c-b3e8-ff75de891718/Leonardo_Diffusion_a_deer_with_big_horns_having_a_muscular_bod_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/c0fa33e1-78c6-4928-83c9-18f5c8caac5d/Leonardo_Diffusion_a_deer_with_big_horns_having_a_muscular_bod_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/6032e760-361a-43f1-acc6-d481184b9380/Leonardo_Diffusion_a_deer_with_big_horns_having_a_muscular_bod_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/72d6816b-4f1b-493c-ad88-7a82dc6b98df/Leonardo_Diffusion_a_dead_person_with_a_scythe_in_the_middle_o_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/ba7b44b1-fd99-4c96-983c-2394ec8af655/Leonardo_Diffusion_a_dead_person_with_a_scythe_in_the_middle_o_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/d37b7200-656e-4ae0-8496-48975255ef26/Leonardo_Diffusion_a_dead_person_with_a_scythe_in_the_middle_o_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/579b69c7-6a2c-4ed1-8092-4795644436e5/Leonardo_Diffusion_Ghost_of_a_person_haunting_a_catholic_cross_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/6f4a3cad-4c4f-49a7-bca8-da28e9d76e85/Leonardo_Diffusion_Catholic_cross_fallen_on_the_ground_now_und_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/08f54584-1a88-4850-abde-085c408210a3/Leonardo_Diffusion_A_greyish_green_colored_long_aliens_whole_b_0.jpg",
      "https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/b2191ebe-66ac-4874-a440-a21f1f9ebbd1/Leonardo_Diffusion_Create_a_demonic_version_of_lynx_from_shado_0.jpg"
    ]
  }]
  return (
    <div className="px-5 py-10 md:px-10 md:py-16">
      <div className="flex py-5">
        <div className="text-5xl font-bold">These are our works</div>
      </div>
      <div className="py-5">
        {images.map((data, index) => {
          return (
            <div key={index} className="py-5 my-10">
              <div className="mb-8 text-3xl font-medium">{data.from}</div>
              <Slider array={data.images} height={'[auto]'} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ShowCaseWork;
