# DLx Database Models

This repo contains database models for the Digitalis infrastructure. They are specific to the tech stack used by Digitalis ([Lotus], [Oxalis], [Daphne]), which all use Microsoft Azure's [Cosmos DB][Cosmos] on the backend. They are not for general use in Digital Linguistics projects (unless you just so happen to be building a Cosmos DB database using the DaFoDiL format and adhering to the same database partitioning strategy). These models enforce certain restrictions beyond that required by the Digitalis data format ([DaFoDiL]), in order to ensure data integrity in the database.

These database models are extremely light wrappers around the data itself, enforcing the presence of a few fields required for data integrity in the database, and providing a few key utility methods. The models should be kept as lightweight as possible so as to reduce memory usage when instantiating hundreds or thousands of data items at once.

## Required Properties

The database models may enforce the presence of certain properties for one of 3 reasons:

1. The DaFoDiL schemas require the property.
2. The database structure and partitioning scheme requires them (`id`, `type`, and `language.id`).
3. Individual Digitalis apps ([Lotus], [Oxalis]) require the property to function properly.

In practice, these impose very few restrictions on the data. [DaFoDiL] requires very few properties to begin with, and even the required properties can sometimes be safely omitted from data stored in the database. This is because Digitalis apps make few assumptions about the properties that will be present on the data, and thus can still display/interact with the data even when missing properties that are required by DaFoDiL.

## The `data` Property

Each database model has a `data` property which is a dynamically computed value that returns a [structured clone][clone] of the object, as a [POJO].

This property is useful because ES classes have a high overhead memory cost when instantiating hundreds or thousands of them at once. (This is not a hypothetical. I've had browser apps hang severely when trying to keep data models in memory.) Accessing the `data` property and working with the returned data rather than the original class allows JavaScript's garbage collection to remove the class from memory, and shortens the length of the object's prototype chain to 1. Since the process of instantiating a model enforces data integrity on the object, the model class can be safely discarded after instantiation.

## The `getReference()` Method

Some database models have a `getReference()` method which returns a core subset of the object's properties, for use in embedding in other objects. For example: Rather than embedding an entire Lexeme object every time you want to cross-reference a Lexeme, you only need a few key properties like `id` and `lemma`, to tell you which Lexeme is being referenced and how that Lexeme should be displayed.

This method also helps ensure that the structure of Database References is consistent for all references to that type.

## Versioning

The version number of this package does not need to stay in sync with that of [DaFoDiL]. However, each DaFoDiL release should trigger a version number update in this package. Compatibility between the two packages is indicated by the version number of DaFoDiL in `devDependencies`.

## Releases

1. `npm version`
2. Create a GitHub release.
3. The GitHub Actions `release` workflow publishes the package to npm.

[clone]:   https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
[Daphne]:  https://github.com/digitallinguistics/api
[Cosmos]:  https://azure.microsoft.com/en-us/products/cosmos-db/
[DaFoDiL]: https://github.com/digitallinguistics/data-format
[Lotus]:   https://github.com/digitallinguistics/app
[Oxalis]:  https://github.com/digitallinguistics/data-explorer
[POJO]:    https://en.wikipedia.org/wiki/Plain_old_Java_object
