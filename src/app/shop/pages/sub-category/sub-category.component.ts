import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "src/app/shared/models/category";
import { Product } from "src/app/shared/models/product";
import { SubCategory } from "src/app/shared/models/subcategory";

@Component({
  selector: "app-sub-category",
  templateUrl: "./sub-category.component.html",
  styleUrls: ["./sub-category.component.scss"],
})
export class SubCategoryComponent implements OnInit {
  @Input() category!: Category;

  @Input() subcategory!: SubCategory;

  testSubCategory: SubCategory = {
    id: "refrigerators",
    name: "Холодильники",
  };

  currentUrl!: string;

  goods: Product[] = [
    {
      id: "RCSK310M20S",
      name: "Холодильник с морозильником Beko RCSK310M20S",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/476/171/preview/csmv5335mc0s_beko_5a3a4c5cb078c.jpeg",
        "https://cdn21vek.by/img/galleries/476/171/preview_b/csmv5335mc0s_beko_5a3a4c65101e7.jpeg",
      ],
      availableAmount: 5,
      price: 769,
      rating: 4,
      description:
        "Nostrud irure velit magna aliquip anim ea proident eiusmod adipisicing. Occaecat enim mollit eiusmod laboris laboris sint. Commodo sint quis eu ex sunt laborum laboris ut non cillum officia consectetur. Laborum est consequat ad aliquip adipisicing veniam qui ad aliquip irure. Lorem est aliqua officia eu quis anim consectetur irure officia nostrud. Non est sit dolore mollit culpa incididunt laboris fugiat velit ea veniam Lorem.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "RCSK310M20S",
      name: "Холодильник с морозильником ATLANT Х 2401-100",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/487/87/2401100_atlant_59e8ae8104736.jpeg",
        "https://cdn21vek.by/img/galleries/487/87/2401100_atlant_59e8ae808355a.jpeg",
      ],
      availableAmount: 10,
      price: 612,
      rating: 3,
      description:
        "Обзор Холодильник ATLANT Х-2401-100 — вместительный и компактный, работает бесшумно и экономно расходует электричество. Table-top – это, в первую очередь, экономия пространства. Такой холодильник можно установить под столешницу, ведь его высота 85 см.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "RCSK250M20W",
      name: "Холодильник с морозильником Beko RCSK250M20W",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/670/660/preview_b/rcsk250m20w_beko_5ba395b802436.jpeg",
        "https://cdn21vek.by/img/galleries/670/660/preview_b/rcsk250m20w_beko_5ba395bcec466.jpeg",
      ],
      availableAmount: 9,
      price: 809,
      rating: 5,
      description:
        "Обзор Холодильник с морозильником Beko RCSK250M20W — вместительный и компактный, работает бесшумно и экономно расходует электричество. Table-top – это, в первую очередь, экономия пространства. Такой холодильник можно установить под столешницу, ведь его высота 85 см.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "LGGAB419SQJL",
      name: "Холодильник с морозильником LG GA-B419SQJL",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_6006f85541cb9.jpeg",
        "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db850d2fd.jpeg",
        "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db90dae64.jpeg",
      ],
      availableAmount: 12,
      price: 1480,
      rating: 5,
      description:
        "Обзор Холодильник с морозильником LG GA-B419SQJL — Быстрая заморозка не повреждает структуру продуктов, сохраняет их вкус, цвет и питательные свойства. При быстрой заморозке кристаллы льда в тканях образуются быстрее, равномернее и мельче по размеру. Эта функция особенно полезна для лучшего сохранения домашних заготовок.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "KGN39AW32RL",
      name: "Холодильник с морозильником Bosch Serie 6 VitaFresh Plus KGN39AW32R",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/6150/224/preview_b/serie6vitafreshpluskgn39aw32r_bosch_5f4f288ee7e66.png",
        "https://cdn21vek.by/img/galleries/6150/224/preview_b/serie6vitafreshpluskgn39aw32r_bosch_5f4f288fe2c4d.png",
        "https://cdn21vek.by/img/galleries/6150/224/preview_b/serie6vitafreshpluskgn39aw32r_bosch_5f4f289090d52.png",
      ],
      availableAmount: 4,
      price: 2229,
      rating: 3,
      description:
        "Холодильно-морозильная комбинация NoFrost с зоной свежести VitaFresh plus сохраняет свежесть продуктов до 2 раз дольше. Нет необходимости размораживать морозильную камеру благодаря системе NoFrost. Холодильники c PerfectFit могут быть установлены на кухне вплотную к мебели и стенам, без зазоров. VitaFresh Plus: свежесть до двух раз дольше. Без лишних запахов и бактерий: антибактериальный фильтр AirFresh. Холодильник c Bosch VarioInverter работает очень тихо и потребляет меньше электроэнергии, чем холодильник с обычным компрессором.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "CSMV55505MC1S",
      name: "Холодильник с морозильником Beko CSMV55505MC1S",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/476/171/preview/csmv5335mc0s_beko_5a3a4c5cb078c.jpeg",
        "https://cdn21vek.by/img/galleries/476/171/preview_b/csmv5335mc0s_beko_5a3a4c65101e7.jpeg",
      ],
      availableAmount: 5,
      price: 859,
      rating: 4,
      description:
        "Deserunt esse anim nulla consequat mollit non do occaecat in aute labore fugiat. Amet deserunt ullamco ex et ullamco. Magna irure nostrud sint enim aliqua incididunt consectetur minim mollit ad. Qui minim magna Lorem nulla officia non consequat ad officia proident laborum. Ut non nisi culpa laboris commodo ipsum laboris do ad irure Lorem nulla eiusmod.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "RSCK310M44S",
      name: "Холодильник с морозильником Beko RSCK310M44S",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/476/171/preview/csmv5335mc0s_beko_5a3a4c5cb078c.jpeg",
        "https://cdn21vek.by/img/galleries/476/171/preview_b/csmv5335mc0s_beko_5a3a4c65101e7.jpeg",
      ],
      availableAmount: 5,
      price: 769,
      rating: 4,
      description:
        "Nostrud irure velit magna aliquip anim ea proident eiusmod adipisicing. Occaecat enim mollit eiusmod laboris laboris sint. Commodo sint quis eu ex sunt laborum laboris ut non cillum officia consectetur. Laborum est consequat ad aliquip adipisicing veniam qui ad aliquip irure. Lorem est aliqua officia eu quis anim consectetur irure officia nostrud. Non est sit dolore mollit culpa incididunt laboris fugiat velit ea veniam Lorem.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "RCSK311M20SS",
      name: "Холодильник с морозильником ATLANT RCSK311M20SS",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/487/87/2401100_atlant_59e8ae8104736.jpeg",
        "https://cdn21vek.by/img/galleries/487/87/2401100_atlant_59e8ae808355a.jpeg",
      ],
      availableAmount: 15,
      price: 812,
      rating: 3,
      description:
        "Обзор Холодильник ATLANT RCSK311M20SS — вместительный и компактный, работает бесшумно и экономно расходует электричество. Table-top – это, в первую очередь, экономия пространства. Такой холодильник можно установить под столешницу, ведь его высота 85 см.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "SRCK250N20V",
      name: "Холодильник с морозильником Beko SRCK250N20V",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/670/660/preview_b/rcsk250m20w_beko_5ba395b802436.jpeg",
        "https://cdn21vek.by/img/galleries/670/660/preview_b/rcsk250m20w_beko_5ba395bcec466.jpeg",
      ],
      availableAmount: 9,
      price: 809,
      rating: 5,
      description:
        "Обзор Холодильник с морозильником Beko SRCK250N20V — вместительный и компактный, работает бесшумно и экономно расходует электричество. Table-top – это, в первую очередь, экономия пространства. Такой холодильник можно установить под столешницу, ведь его высота 85 см.",
      isInCart: false,
      isFavorite: false,
    },
    {
      id: "LGGAB491SJQL",
      name: "Холодильник с морозильником LG GA-B491SJQL",
      imageUrls: [
        "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_6006f85541cb9.jpeg",
        "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db850d2fd.jpeg",
        "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db90dae64.jpeg",
      ],
      availableAmount: 3,
      price: 999,
      rating: 4,
      description:
        "Обзор Холодильник с морозильником LG GA-B491SJQL — быстрая заморозка не повреждает структуру продуктов, сохраняет их вкус, цвет и питательные свойства. При быстрой заморозке кристаллы льда в тканях образуются быстрее, равномернее и мельче по размеру. Эта функция особенно полезна для лучшего сохранения домашних заготовок.",
      isInCart: false,
      isFavorite: false,
    },
  ];

  categoryId!: string;

  subcategoryId!: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = this.activateRoute.snapshot.params.category;
    this.subcategoryId = this.activateRoute.snapshot.params.subcategory;
    /*
      TODO
      Check is categoryId and subcategoryId valid or not by response to 'http://localhost:3004/categories or Input obj
      if (this.subcategory.id !== this.subcategoryId && this.category.id !== this.categoryId) {
        this.router.navigate(['/']);
      }
    */
    if (
      this.categoryId !== "appliances" ||
      this.subcategoryId !== "refrigerators"
    ) {
      this.router.navigate(["/"]);
    }
  }
}
