import { CategoryType } from "@/amplify/data/resource";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "@/amplify/data/resource";
import { Suspense, startTransition, useEffect, useState } from "react";
import { Input } from "../ui/input";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const client = generateClient<Schema>();

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  // FAKE DATA
  const [categories, setCategories] = useState<CategoryType[]>([
    { name: "First category" },
    { name: "Second category" },
    { name: "Third category" },
  ]);
  const [categoriesData, setCategoriesData] = useState<Schema["Category"][]>(
    []
  );
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    // fetchCategories();
  }, []);

  // const fetchCategories = async () => {
  //   try {
  //     const { data: categories, errors } = await client.models.Category.list();
  //     setCategoriesData(categories);
  //   } catch (error) {
  //     console.log(`Error finding categories. ERROR :: ${error}`);
  //   }
  // };

  const handleAddCategory = () => {
    // try {
    //   const { data: name } = await client.models.Category.create({
    //     name: categoryLabel,
    //   });
    //   console.log(name);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(`handleAddCategory() :: ${newCategory}`);
  };

  return (
    <Suspense>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.length > 0 &&
            categories.map((category) => (
              <SelectItem
                key={category.name}
                value={category.name}
                className="select-item p-regular-14"
              >
                {category.name}
              </SelectItem>
            ))}

          <AlertDialog>
            <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
              Open
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader className="">
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input
                    type="text"
                    placeholder="Category name"
                    className="input-field mt-3"
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => startTransition(handleAddCategory)}
                >
                  Add
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectContent>
      </Select>
    </Suspense>
  );
};

export default Dropdown;
