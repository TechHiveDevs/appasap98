
/**
 * Offer Controller
 * ====================
 * @author MarioMonir
 */

// ----------------------------------------------------------------

import {
  crud,
  prismaCrud,
  EntityCrud,
  CustomCrudController,
} from "../../utils/crud/express-crud-router";
/**
 * import { Offer } from "@prisma/client";
 * import { offerUseCase1Service } from "./offer-services/offerUseCase1.service";
 */

// ----------------------------------------------------------------

const entity = `offer`;
const path = `/offer`;

// ----------------------------------------------------------------

const crudController: EntityCrud = {
  ...prismaCrud(entity),
  /**
   * // To override the default prisma crud controller
   * getList: async ({ filter, limit, offset, order }, req, res) => Promise.resolve([0, [{}]]),
   * create: async (payload, req, res) => Promise.resolve({}),
   * getOne: async (id, req, res) => Promise.resolve({}),
   * update: async (id, payload, req, res) => Promise.resolve({}),
   * destroy: async (id, req, res) => Promise.resolve(1),
   */
};

// ----------------------------------------------------------------

/**
 * Custom Crud Controller if you want custom routes
 */
const customRoutesController: CustomCrudController = [
  /**
   *  {
   *   path: "/user-custom-route",
   *   method: "get",
   *   controller: (req, res, next) => {
   *     try {
   *       // Call Entity Service here
   *       res.status(202).json({ data: usecase1ExampleUser() });
   *     } catch (error) {  next(error) }
   *   },
   * },
   */
];

// ----------------------------------------------------------------

export default crud({ path, crudController, customRoutesController });